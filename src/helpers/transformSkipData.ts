import { calculatePriceWithVat } from '@/helpers/calculatePriceWithVat';
import { generateSkipName } from '@/helpers/generateSkipName';

export function transformSkipData(data: Skip[]): Skip[] {
    return data.map((skip) => ({
        ...skip,
        price_with_vat: calculatePriceWithVat(skip),
        name: generateSkipName(skip),
        privatePropertyOnly: !skip.allowed_on_road,
    }));
}
