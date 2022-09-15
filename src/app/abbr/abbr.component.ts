import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { delay, finalize, from, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { faCheck, faChevronLeft, faCopy } from '@fortawesome/free-solid-svg-icons';
import { AbbrService } from '../services/abbr.service';
import { Abbreviation } from '../services/abbreviations';

@UntilDestroy()
@Component({
    selector: 'app-abbr',
    templateUrl: './abbr.component.html',
})
export class AbbrComponent implements OnInit {

    abbr?: string | null;
    abbreviations?: Abbreviation[] | null;
    textCopied = false;

    readonly faCheck       = faCheck;
    readonly faChevronLeft = faChevronLeft;
    readonly faCopy        = faCopy;

    constructor(
        @Inject(LOCALE_ID) readonly locale: string,
        @Inject(DOCUMENT) private readonly doc: Document,
        private readonly route: ActivatedRoute,
        private readonly abbrService: AbbrService,
    ) {}

    /**
     * Return query params for the search function.
     */
    get searchParams(): Params {
        // The params should have been passed here by SearchComponent
        return this.route.snapshot.queryParams;
    }

    ngOnInit(): void {
        // Subscribe to route changes to load the specified abbreviation
        this.route.paramMap
            .pipe(untilDestroyed(this))
            .subscribe(pm => {
                this.abbr = pm.get('abbr');
                this.abbreviations = this.abbr ? this.abbrService.findExact(this.abbr) : null;
            });
    }

    copyLink() {
        from(navigator.clipboard.writeText(this.doc.location.href))
            .pipe(
                tap(() => this.textCopied = true),
                delay(3000),
                finalize(() => this.textCopied = false))
            .subscribe();
    }
}
