type PageParams = {
    params: Promise<{ [key: string]: string | string[] }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
