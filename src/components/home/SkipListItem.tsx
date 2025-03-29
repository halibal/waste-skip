import { CiCalendar } from 'react-icons/ci';
import { FiCreditCard } from 'react-icons/fi';
import { LuTruck, LuWeight } from 'react-icons/lu';

type SkipListItemProps = {
    skip: Skip;
};

export default function SkipListItem({ skip }: SkipListItemProps) {
    const priceWithVat =
        skip?.price_with_vat || skip?.price_before_vat + skip?.vat;

    return (
        <div className="flex justify-between">
            <div className="relative flex w-28 flex-col items-center justify-center bg-secondary p-3 text-white">
                <div
                    id={`skip-button-${skip.id}`}
                    data-tid={`skip-button-${skip.id}`}
                    className="absolute top-2 left-2 flex h-5 w-5 items-center justify-center rounded-full border"
                >
                    <div className="h-3 w-3 rounded-full bg-white" />
                </div>
                <span className="text-3xl">{skip.size}</span>
                <span className="text-sm">YARD</span>
                {skip.forbidden && (
                    <span className="rounded-full bg-[#eab308]/20 px-2 py-0.5 text-xs text-[#eab308]">
                        Unavailable
                    </span>
                )}
            </div>
            <div className="flex-1 p-4 text-sm text-secondary">
                <div className="mb-2 flex items-center gap-1">
                    <CiCalendar className="size-5" />
                    <span className="font-medium">
                        {skip.hire_period_days} days hire
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-xl border border-gray-300 px-2 py-0.5 text-xs font-semibold">
                        <LuTruck className="mr-1 inline-block size-3" />
                        <span>
                            {skip.allowed_on_road
                                ? 'Road placement allowed'
                                : 'Off-road only'}
                        </span>
                    </div>
                    <div className="flex items-center rounded-xl border border-gray-300 px-2 py-0.5 text-xs font-bold">
                        <LuWeight className="mr-1 inline-block size-3" />
                        <span>
                            {skip.allows_heavy_waste
                                ? 'Heavy waste allowed'
                                : 'No heavy waste'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-4 text-right">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FiCreditCard className="size-4" /> £
                    {skip?.price_before_vat?.toFixed()} + £
                    {skip?.vat?.toFixed()} VAT
                </div>
                <div className="text-xl font-bold text-[#0037c1]">
                    £{priceWithVat?.toFixed()}
                </div>
                {skip?.transport_cost && (
                    <div className="mt-1 text-[10px] text-red-500">
                        Transport Fee: £{skip?.transport_cost?.toFixed()}
                    </div>
                )}
            </div>
        </div>
    );
}
