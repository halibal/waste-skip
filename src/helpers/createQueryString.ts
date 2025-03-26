export function createQueryString(
    params: Record<string, string | number | boolean | undefined | null>
): string {
    const filteredParams = Object.entries(params)
        .filter(
            ([_, value]) =>
                value !== undefined &&
                value !== null &&
                String(value).trim() !== ''
        )
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
        )
        .join('&');

    return filteredParams ? `?${filteredParams}` : '';
}
