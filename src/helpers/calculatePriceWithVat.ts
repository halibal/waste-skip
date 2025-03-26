export function calculatePriceWithVat(skip: Skip): number {
    return skip.price_before_vat * (1 + skip.vat / 100);
}
