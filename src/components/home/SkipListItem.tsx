import { cn } from '@/helpers/cn';

type SkipListItemProps = {
    skip: Skip;
};

export default function SkipListItem({ skip }: SkipListItemProps) {
    const priceWithVat =
        skip?.price_with_vat || skip?.price_before_vat + skip?.vat;

    return (
        <div className="flex items-start justify-between">
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <div
                        role="radio"
                        id={`skip-button-${skip.id}`}
                        data-tid={`skip-button-${skip.id}`}
                        className="flex h-5 w-5 items-center justify-center rounded-full border"
                    >
                        <div className="h-3 w-3 rounded-full bg-[#0037c1]" />
                    </div>
                    <h3 className="font-bold">
                        {skip.name || `${skip.size} Yard Skip`}
                    </h3>
                    {skip.forbidden && (
                        <span className="rounded-full bg-[#eab308]/20 px-2 py-0.5 text-xs text-[#eab308]">
                            Unavailable
                        </span>
                    )}
                </div>

                <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
                    <div>
                        Size:{' '}
                        <span className="font-medium">{skip.size} Yards</span>
                    </div>
                    <div>
                        Hire Period:{' '}
                        <span className="font-medium">
                            {skip.hire_period_days} Days
                        </span>
                    </div>
                    <div>
                        Postcode:{' '}
                        <span className="font-medium">{skip.postcode}</span>
                    </div>
                    {skip.area && (
                        <div>
                            Area:{' '}
                            <span className="font-medium">{skip.area}</span>
                        </div>
                    )}
                    <div>
                        Road Placement:{' '}
                        <span
                            className={cn('text-xs', {
                                'text-green-600': skip.allowed_on_road,
                                'text-red-600': !skip.allowed_on_road,
                            })}
                        >
                            {skip.allowed_on_road ? 'Allowed' : 'Not Allowed'}
                        </span>
                    </div>
                    <div>
                        Heavy Waste:{' '}
                        <span
                            className={cn('text-xs', {
                                'text-green-600': skip.allows_heavy_waste,
                                'text-red-600': !skip.allows_heavy_waste,
                            })}
                        >
                            {skip.allows_heavy_waste
                                ? 'Allowed'
                                : 'Not Allowed'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="text-right">
                <div className="text-lg font-bold text-[#0037c1]">
                    £{priceWithVat?.toFixed(2)}
                </div>
                <div className="text-xs text-gray-500">
                    (£{skip?.price_before_vat?.toFixed(2)} + £
                    {skip?.vat?.toFixed(2)} VAT)
                </div>
                {skip?.transport_cost && (
                    <div className="mt-1 text-[10px] text-red-500">
                        Transport Fee: £{skip?.transport_cost?.toFixed(2)}
                    </div>
                )}
            </div>
        </div>
    );
}
