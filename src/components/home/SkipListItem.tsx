import { Tooltip } from '@/components/Tooltip';
import { cn } from '@/helpers/cn';
import { AiFillInfoCircle } from 'react-icons/ai';
import { CiCalendar } from 'react-icons/ci';
import { FiCreditCard } from 'react-icons/fi';
import { IoWarningOutline } from 'react-icons/io5';
import { LuTruck, LuWeight } from 'react-icons/lu';

type SkipListItemProps = {
    skip: Skip;
};

export default function SkipListItem({ skip }: SkipListItemProps) {
    const isPrivateProperty = !skip?.allowed_on_road;
    const isHeavyWasteAllowed = skip?.allows_heavy_waste;
    const priceBeforeVat = skip?.price_before_vat || 0;
    const vat = skip?.vat || 0;
    const transportCost = skip?.transport_cost || 0;
    // const totalPrice = priceBeforeVat + vat + transportCost;
    // const priceWithTransport = totalPrice + transportCost;
    // const priceWithVat = skip?.price_with_vat || priceWithTransport;

    return (
        <div className="flex justify-between max-sm:flex-col">
            <div className="relative z-0 flex w-full items-center justify-center gap-1 bg-secondary p-6 text-white max-sm:py-2 sm:w-28 sm:flex-col">
                <div
                    id={`skip-button-${skip?.id}`}
                    data-tid={`skip-button-${skip?.id}`}
                    className="absolute top-2 left-2 flex h-5 w-5 items-center justify-center rounded-full border-2"
                >
                    <div className="h-3 w-3 rounded-full bg-white" />
                </div>
                <span className="text-3xl font-bold lg:text-4xl lg:leading-7">
                    {skip?.size}
                </span>
                <span className="text-xs tracking-wider lg:text-sm">YARD</span>
                {skip?.forbidden && (
                    <span className="rounded-full bg-[#eab308]/20 px-2 py-0.5 text-xs text-[#eab308]">
                        Unavailable
                    </span>
                )}
            </div>
            <div className="flex-1 px-4 py-2 text-sm text-secondary max-md:flex max-md:flex-wrap max-md:items-center max-sm:justify-center max-sm:gap-2 md:space-y-3 md:p-6">
                <div className="flex items-center gap-1">
                    <CiCalendar className="size-5" />
                    <span className="font-medium">
                        {skip?.hire_period_days} days hire
                    </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 max-sm:justify-center">
                    <div
                        className={cn(
                            'flex items-center rounded-full border border-gray-300 bg-gray-50 px-2.5 py-0.5 text-xs font-semibold',
                            {
                                'bg-yellow-50 text-yellow-700':
                                    isPrivateProperty,
                            }
                        )}
                    >
                        {!isPrivateProperty ? (
                            <LuTruck className="mr-1 inline-block size-3" />
                        ) : (
                            <IoWarningOutline className="mr-1 inline-block size-3" />
                        )}
                        <span>
                            {!isPrivateProperty
                                ? 'Road placement allowed'
                                : 'Private property only'}
                        </span>
                    </div>
                    <div
                        className={cn(
                            'flex items-center rounded-full border border-gray-300 bg-gray-50 px-2.5 py-0.5 text-xs font-semibold',
                            {
                                'bg-yellow-50 text-yellow-700':
                                    !isHeavyWasteAllowed,
                            }
                        )}
                    >
                        {isHeavyWasteAllowed ? (
                            <LuWeight className="mr-1 inline-block size-3" />
                        ) : (
                            <IoWarningOutline className="mr-1 inline-block size-3" />
                        )}
                        <span>
                            {isHeavyWasteAllowed
                                ? 'Heavy waste allowed'
                                : 'No heavy waste'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="px-4 py-2 text-right sm:p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 max-lg:justify-end max-sm:justify-center lg:text-sm">
                    <FiCreditCard className="size-3 lg:size-4" /> £
                    {priceBeforeVat.toFixed()} + £{vat.toFixed()} VAT
                </div>
                <div className="flex items-center justify-end gap-2 text-2xl font-bold text-secondary max-sm:mt-4 max-sm:justify-center max-sm:gap-1 max-sm:text-3xl">
                    {skip?.transport_cost && (
                        <Tooltip
                            text={`Transport Fee: £${transportCost.toFixed()}`}
                        >
                            <AiFillInfoCircle className="text-base text-primary" />
                        </Tooltip>
                    )}{' '}
                    £{priceBeforeVat?.toFixed()}
                </div>
            </div>
        </div>
    );
}
