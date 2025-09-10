import { Component, computed, effect, inject, input, LOCALE_ID, signal } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SafeUrl } from '@angular/platform-browser';
import { delay, finalize, from, tap } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faCopy } from '@fortawesome/free-solid-svg-icons';
import { NgxComentarioComponent } from 'ngx-comentario';
import { AbbrService } from '../services/abbr.service';
import { Abbreviation } from '../services/abbreviations';
import { MetadataService } from '../services/metadata.service';
import { Sharer, SharerService } from '../services/sharer.service';

@Component({
    selector: 'app-abbr',
    templateUrl: './abbr.component.html',
    imports: [RouterLink, FontAwesomeModule, NgxComentarioComponent],
})
export class AbbrComponent {

    readonly locale = inject(LOCALE_ID);
    private readonly doc = inject<Document>(DOCUMENT);
    private readonly route = inject(ActivatedRoute);
    private readonly metadataSvc = inject(MetadataService);
    private readonly abbrService = inject(AbbrService);
    private readonly sharerSvc = inject(SharerService);

    /** Current abbreviation, populated from a query param. */
    readonly abbr = input<string>();

    /** List of found abbreviations. */
    readonly abbreviations = computed<Abbreviation[] | null>(() =>  this.abbr() ? this.abbrService.findExact(this.abbr()!) : null);

    readonly textCopied = signal(false);

    /**
     * Page ID for comments.
     * Don't bother if none has been found, strip the trailing dot to match the AbbrService.findExact() behaviour
     * otherwise.
     */
    readonly pageId = computed<string | undefined>(() => this.abbreviations()?.length ? '/abbr/' + this.abbr()!.replace(/\.$/, '') : undefined);

    readonly sharers = this.sharerSvc.orderedSharers;

    // Icons
    readonly faChevronLeft = faChevronLeft;
    readonly faCopy        = faCopy;

    private readonly appTitle       = $localize`Dutch Abbreviations`;
    private readonly appDescription = $localize`Meaning of "{abbr}" and its translations into English`;

    constructor() {
        // Update page metadata on abbr change
        effect(() => {
            const abbr = this.abbr();
            this.metadataSvc.title       = (abbr ? abbr + ' | ' : '') + this.appTitle;
            this.metadataSvc.description = this.appDescription.replace('{abbr}', abbr ?? '');
        });
    }

    /**
     * Return a shareable link URL.
     */
    get link(): string {
        return this.doc.location.origin + this.doc.location.pathname;
    }

    /**
     * Return query params for the search function.
     */
    get searchParams(): Params {
        // The params should have been passed here by SearchComponent
        return this.route.snapshot.queryParams;
    }

    copyLink() {
        from(navigator.clipboard.writeText(this.link))
            .pipe(
                tap(() => this.textCopied.set(true)),
                delay(2_000),
                finalize(() => this.textCopied.set(false)))
            .subscribe();
    }

    getShareUrl(sharer: Sharer): SafeUrl | null {
        return this.sharerSvc.getShareUrl(sharer, this.link, $localize`Abbreviation` + ': ' + this.abbr);
    }
}
