import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SharerService, SharerType } from './sharer.service';

describe('SharerService', () => {

    let service: SharerService;
    let sanitizer: DomSanitizer;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SharerService);
        sanitizer = TestBed.inject(DomSanitizer);
    });

    it('is created', () => {
        expect(service).toBeTruthy();
    });

    it('provides list of sharers', () => {
        const sharers = service.sharers;
        [
            'facebook',
            'twitter',
            'linkedin',
            'email',
            'whatsApp',
            'telegram',
            'vk',
        ].forEach(s => expect(sharers[s as SharerType]).toBeTruthy());
    });

    it('provides ordered list of sharers', () => {
        const sharers = service.orderedSharers;
        expect(sharers.length).toBe(7);

        // Verify sharers are correctly ordered
        let i = -1;
        sharers.forEach(sh => {
            expect(sh.order).toBeGreaterThan(i);
            i = sh.order;
        });
    });

    it('provides Facebook share URL', () => {
        const u = service.getShareUrl(service.sharers.facebook, 'https://afk.best/abbreviatura', 'Winter is coming');
        expect(u).toEqual(sanitizer.bypassSecurityTrustUrl('https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fafk.best%2Fabbreviatura'));
    });

    it('handles URL with trailing dot', () => {
        const u = service.getShareUrl(service.sharers.twitter, 'https://afk.best/a.b.b.r.', 'ABBR');
        expect(u).toEqual(sanitizer.bypassSecurityTrustUrl('https://twitter.com/intent/tweet/?url=https%3A%2F%2Fafk.best%2Fa.b.b.r%2E'));
    });

    it('provides WhatsApp share URL', () => {
        const u = service.getShareUrl(service.sharers.whatsApp, 'https://afk.best/abbreviatura', 'Winter is coming');
        expect(u).toEqual(sanitizer.bypassSecurityTrustUrl('whatsapp://send?text=Winter%20is%20coming+https%3A%2F%2Fafk.best%2Fabbreviatura'));
    });
});
