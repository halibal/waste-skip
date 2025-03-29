import { Inter } from 'next/font/google';
export { metadataRoot as metadata } from '@/seo/metadata/metadata-root';

import '@/styles/globals.css';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} relative antialiased`}>
                {children}
            </body>
        </html>
    );
}
