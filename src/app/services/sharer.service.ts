import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTelegram, faTwitter, faVk, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export type SharerType =
    'facebook' |
    'twitter' |
    'linkedin' |
    'email' |
    'whatsApp' |
    'telegram' |
    'vk';

export interface Sharer {
    order:    number;         // Number for ordering
    name:     string;         // Name of the sharer
    icon:     IconDefinition; // Icon for the sharer
    newTab:   boolean;        // Whether the link is to be opened in a new tab
    shareUrl: string;         // URL pattern for the sharer, which uses '\tu' for the shared URL and '\tt' for the text
}

export type SharerMap = {[type in SharerType]: Sharer};

@Injectable({
    providedIn: 'root',
})
export class SharerService {

    private static readonly sharers: SharerMap = {
        facebook: {
            order:    0,
            name:     'Facebook',
            icon:     faFacebook,
            newTab:   true,
            shareUrl: 'https://facebook.com/sharer/sharer.php?u=\tu',
        },
        twitter: {
            order:    1,
            name:     'Twitter',
            icon:     faTwitter,
            newTab:   true,
            shareUrl: 'https://twitter.com/intent/tweet/?url=\tu',
        },
        linkedin: {
            order:    2,
            name:     'LinkedIn',
            icon:     faLinkedin,
            newTab:   true,
            shareUrl: 'https://www.linkedin.com/shareArticle?mini=true&url=\tu',
        },
        email: {
            order:    3,
            name:     'Email',
            icon:     faEnvelope,
            newTab:   false,
            shareUrl: 'mailto:?body=\tu&subject=\tt'
        },
        whatsApp: {
            order:    4,
            name:     'WhatsApp',
            icon:     faWhatsapp,
            newTab:   false,
            shareUrl: 'whatsapp://send?text=\tt+\tu'
        },
        telegram: {
            order:    5,
            name:     'Telegram',
            icon:     faTelegram,
            newTab:   true,
            shareUrl: 'https://telegram.me/share/url?text=\tt&url=\tu'
        },
        vk: {
            order:    6,
            name:     'VK',
            icon:     faVk,
            newTab:   true,
            shareUrl: 'https://vk.com/share.php?url=\tu'
        },
    };

    constructor(
        private readonly sanitizer: DomSanitizer,
    ) {}

    /**
     * Map of all known sharers.
     */
    get sharers(): SharerMap {
        return SharerService.sharers;
    }

    /**
     * List of all known sharers, sorted by each sharer's order value.
     */
    get orderedSharers(): Sharer[] {
        return Object.values(SharerService.sharers).sort((a, b) => a.order - b.order);
    }

    /**
     * Return a complete URL for sharing the provided URL using the given sharer
     * @param sharer Sharer to use.
     * @param url URL to be shared with the sharer.
     * @param title Title text.
     */
    getShareUrl(sharer: Sharer, url: string, title: string): SafeUrl {
        // Encode the URL
        url = encodeURIComponent(url)
        // If it ends with a dot, percent-encode that trailing dot to prevent parsing errors while sharing
        if (url.endsWith('.')) {
            url = url.slice(0, -1) + '%2E';
        }
        // Make a safe sharing URL
        return this.sanitizer.bypassSecurityTrustUrl(
            sharer.shareUrl
                .replace('\tu', url)
                .replace('\tt', encodeURIComponent(title)));
    }

}
