import type { Metadata } from 'next';

import { authors } from '@/seo/authors';
import { brand } from '@/seo/brand';
import { keywordsRoot } from '@/seo/keywords/keywords-root';

export const metadataRoot: Metadata = {
    title: {
        default: `Skip Hire - ${brand.name}`,
        template: `${brand.name} | %s`,
    },
    applicationName: brand.name,
    assets: `/assets`,
    authors,
    creator: brand.creator,
    description: brand.description,
    generator: `Next.js`,
    icons: {
        icon: [
            {
                url: '/assets/icons/icon-16x16.ico',
                sizes: '16x16',
                type: 'image/x-icon',
            },
            {
                url: '/assets/icons/icon-32x32.ico',
                sizes: '32x32',
                type: 'image/x-icon',
            },
            {
                url: '/assets/icons/icon-48x48.ico',
                sizes: '48x48',
                type: 'image/x-icon',
            },
            {
                url: '/assets/icons/android-icon-192x192.svg',
                sizes: '192x192',
                type: 'image/svg',
            },
            {
                url: '/assets/icons/android-icon-256x256.svg',
                sizes: '256x256',
                type: 'image/svg',
            },
        ],
        apple: {
            url: '/assets/icons/apple-icon-180x180.svg',
            sizes: '180x180',
            type: 'image/svg',
        },
    },
    keywords: keywordsRoot.en,
    metadataBase: new URL(brand.website),
    openGraph: {
        type: 'website',
        title: brand.name,
        description: brand.description,
        emails: brand.email,
        phoneNumbers: brand.phone,
        faxNumbers: brand.fax,
        siteName: brand.name,
        locale: brand.locale,
        images: [
            {
                url: '/assets/images/remwaste-og.png',
                alt: brand.name,
                type: 'image/png',
                width: 512,
                height: 512,
            },
        ],
        url: brand.website,
        countryName: brand.countryOrigin,
    },
    publisher: brand.publisher,
    referrer: 'origin',
    robots: 'index, follow',
    twitter: {
        card: 'summary_large_image',
        site: brand.twitter,
        creator: brand.twitter,
        description: brand.description,
        title: brand.name,
        images: [
            {
                url: '/assets/images/remwaste-og.png',
                alt: brand.name,
                type: 'image/png',
                width: 512,
                height: 512,
            },
        ],
    },
};
