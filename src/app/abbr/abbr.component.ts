import { Component, Inject, Input, LOCALE_ID, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SafeUrl } from '@angular/platform-browser';
import { delay, finalize, from, tap } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faChevronLeft, faCopy } from '@fortawesome/free-solid-svg-icons';
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
export class AbbrComponent implements OnChanges {

    @Input()
    abbr?: string;

    abbreviations?: Abbreviation[] | null;
    textCopied = false;

    pageId?: string;

    readonly sharers = this.sharerSvc.orderedSharers;

    readonly faCheck       = faCheck;
    readonly faChevronLeft = faChevronLeft;
    readonly faCopy        = faCopy;

    private readonly appTitle       = $localize`Dutch Abbreviations`;
    private readonly appDescription = $localize`Meaning of "{abbr}" and its translations into English`;

    constructor(
        @Inject(LOCALE_ID) readonly locale: string,
        @Inject(DOCUMENT) private readonly doc: Document,
        private readonly route: ActivatedRoute,
        private readonly metadataSvc: MetadataService,
        private readonly abbrService: AbbrService,
        private readonly sharerSvc: SharerService,
    ) {}

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

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['abbr']) {
            this.abbreviations = this.abbr ? this.abbrService.findExact(this.abbr) : null;

            // Update the page ID for comment. Don't bother if none has been found, strip the trailing dot to match the
            // AbbrService.findExact() behaviour otherwise
            this.pageId = this.abbreviations?.length ?
                '/abbr/' + this.abbr!.replace(/\.$/, '') :
                undefined;

            // Update page metadata
            this.metadataSvc.title       = (this.abbr ? this.abbr + ' | ' : '') + this.appTitle;
            this.metadataSvc.description = this.appDescription.replace('{abbr}', this.abbr ?? '');
        }
    }

    copyLink() {
        from(navigator.clipboard.writeText(this.link))
            .pipe(
                tap(() => this.textCopied = true),
                delay(3000),
                finalize(() => this.textCopied = false))
            .subscribe();
    }

    getShareUrl(sharer: Sharer): SafeUrl | null {
        return this.sharerSvc.getShareUrl(sharer, this.link, $localize`Abbreviation` + ': ' + this.abbr);
    }
}
