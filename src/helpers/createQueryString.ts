export function createQueryString(
    params: Record<string, string | number | boolean | undefined | null>
): string {
    const filteredParams = Object.entries(params)
        .filter(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
