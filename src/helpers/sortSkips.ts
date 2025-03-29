export function sortSkips(
    skipsToSort: Skip[],
    sortBy: SortOption,
    direction: SortDirection
): Skip[] {
    const sortedSkips = [...skipsToSort];
    const directionMultiplier = direction === 'asc' ? 1 : -1;

    switch (sortBy) {
        case 'size':
            return sortedSkips.sort((a, b) => {
                if (a.size === b.size) {
                    const aPrice = a.price_with_vat || a.price_before_vat;
                    const bPrice = b.price_with_vat || b.price_before_vat;
                    return (aPrice - bPrice) * directionMultiplier;
                }
                return (a.size - b.size) * directionMultiplier;
            });
        case 'hire_period':
            return sortedSkips.sort((a, b) => {
                if (a.hire_period_days === b.hire_period_days)
                    return (a.size - b.size) * directionMultiplier;
                return a.hire_period_days > b.hire_period_days
                    ? 1 * directionMultiplier
                    : -1 * directionMultiplier;
            });
        case 'allowed_on_road':
            return sortedSkips.sort((a, b) => {
                if (a.allowed_on_road === b.allowed_on_road)
                    return (a.size - b.size) * directionMultiplier;
                return (a.allowed_on_road ? -1 : 1) * directionMultiplier;
            });
        case 'price':
            return sortedSkips.sort((a, b) => {
                const aPrice = a.price_with_vat || a.price_before_vat;
                const bPrice = b.price_with_vat || b.price_before_vat;
                if (aPrice === bPrice)
                    return (a.size - b.size) * directionMultiplier;
                return (aPrice - bPrice) * directionMultiplier;
            });
        case 'allows_heavy_waste':
            return sortedSkips.sort((a, b) => {
                if (a.allows_heavy_waste === b.allows_heavy_waste)
                    return (a.size - b.size) * directionMultiplier;
                return (a.allows_heavy_waste ? -1 : 1) * directionMultiplier;
            });
        default:
            return sortedSkips;
    }
}
