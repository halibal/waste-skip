'use client';

import { useState, ReactNode, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
    text: ReactNode;
    position?: 'top' | 'right' | 'bottom' | 'left';
    delayShow?: number;
    delayHide?: number;
    children: ReactNode;
    className?: string;
}

export function Tooltip({
    text,
    position = 'top',
    delayShow = 300,
    delayHide = 200,
    children,
    className = '',
}: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [showTimer, setShowTimer] = useState<NodeJS.Timeout | null>(null);
    const [hideTimer, setHideTimer] = useState<NodeJS.Timeout | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    function updatePosition() {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const scrollLeft =
            window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        let top = 0;
        let left = 0;

        switch (position) {
            case 'top':
                top = rect.top + scrollTop - 8;
                left = rect.left + scrollLeft + rect.width / 2;
                break;
            case 'right':
                top = rect.top + scrollTop + rect.height / 2;
                left = rect.right + scrollLeft + 8;
                break;
            case 'bottom':
                top = rect.bottom + scrollTop + 8;
                left = rect.left + scrollLeft + rect.width / 2;
                break;
            case 'left':
                top = rect.top + scrollTop + rect.height / 2;
                left = rect.left + scrollLeft - 8;
                break;
        }

        setTooltipPosition({ top, left });
    }

    function handleMouseEnter() {
        if (hideTimer) clearTimeout(hideTimer);
        setHideTimer(null);

        if (!isVisible && !showTimer) {
            const timer = setTimeout(() => {
                setIsVisible(true);
                updatePosition();
                setShowTimer(null);
            }, delayShow);
            setShowTimer(timer);
        }
    }

    function handleMouseLeave() {
        if (showTimer) clearTimeout(showTimer);
        setShowTimer(null);

        if (isVisible && !hideTimer) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                setHideTimer(null);
            }, delayHide);
            setHideTimer(timer);
        }
    }

    const tooltipStyles: Record<string, React.CSSProperties> = {
        tooltip: {
            position: 'absolute',
            zIndex: 9999,
            top: 0,
            left: 0,
            transform: 'translate(-50%, -100%)',
            backgroundColor: '#1f2937',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '4px',
            maxWidth: '20rem',
            boxShadow:
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            whiteSpace: 'normal',
            width: 'max-content',
        },
        arrow: {
            position: 'absolute',
            width: '8px',
            height: '8px',
            background: '#1f2937',
            transform: 'rotate(45deg)',
            bottom: '-4px',
            left: '50%',
            marginLeft: '-4px',
        },
    };

    if (position === 'top') {
        tooltipStyles.tooltip.top = tooltipPosition.top;
        tooltipStyles.tooltip.left = tooltipPosition.left;
        tooltipStyles.tooltip.transform = 'translate(-50%, -100%)';
        tooltipStyles.arrow.top = 'auto';
        tooltipStyles.arrow.bottom = '-4px';
        tooltipStyles.arrow.left = '50%';
        tooltipStyles.arrow.marginLeft = '-4px';
    } else if (position === 'bottom') {
        tooltipStyles.tooltip.top = tooltipPosition.top;
        tooltipStyles.tooltip.left = tooltipPosition.left;
        tooltipStyles.tooltip.transform = 'translate(-50%, 0)';
        tooltipStyles.arrow.top = '-4px';
        tooltipStyles.arrow.bottom = 'auto';
        tooltipStyles.arrow.left = '50%';
        tooltipStyles.arrow.marginLeft = '-4px';
    } else if (position === 'left') {
        tooltipStyles.tooltip.top = tooltipPosition.top;
        tooltipStyles.tooltip.left = tooltipPosition.left;
        tooltipStyles.tooltip.transform = 'translate(-100%, -50%)';
        tooltipStyles.arrow.top = '50%';
        tooltipStyles.arrow.marginTop = '-4px';
        tooltipStyles.arrow.right = '-4px';
        tooltipStyles.arrow.left = 'auto';
    } else if (position === 'right') {
        tooltipStyles.tooltip.top = tooltipPosition.top;
        tooltipStyles.tooltip.left = tooltipPosition.left;
        tooltipStyles.tooltip.transform = 'translate(0, -50%)';
        tooltipStyles.arrow.top = '50%';
        tooltipStyles.arrow.marginTop = '-4px';
        tooltipStyles.arrow.left = '-4px';
        tooltipStyles.arrow.right = 'auto';
    }

    return (
        <div
            ref={containerRef}
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
        >
            {children}

            {isVisible &&
                mounted &&
                createPortal(
                    <div
                        style={tooltipStyles.tooltip}
                        role="tooltip"
                        className={className}
                    >
                        {text}
                        <div style={tooltipStyles.arrow}></div>
                    </div>,
                    document.body
                )}
        </div>
    );
}
