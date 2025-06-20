import { Component, computed, effect, ElementRef, inject, input, LOCALE_ID, OnInit, viewChild } from '@angular/core';
import { Params, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Abbreviation } from '../services/abbreviations';
import { AbbrService } from '../services/abbr.service';
import { MetadataService } from '../services/metadata.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    imports: [FormsModule, ReactiveFormsModule, RouterLink],
})
export class SearchComponent implements OnInit {

    readonly locale = inject(LOCALE_ID);

    private readonly router = inject(Router);
    private readonly metadataSvc = inject(MetadataService);
    private readonly abbrService = inject(AbbrService);

    /** Query string, populated from a query param. */
    readonly q = input<string>();

    /** Whether to search abbreviations only (as a string), populated from a query param. */
    readonly a = input<string>();

    /** Whether to search abbreviations only (as a boolean). */
    readonly abbrOnly = computed(() => this.a() === 'true');

    /** Found abbreviations. */
    readonly abbreviations = computed<Abbreviation[] | undefined>(() => {
        const q = this.q();
        return q ? this.abbrService.find(q, this.locale, this.abbrOnly()) : undefined;
    });

    /** The search input box. */
    readonly searchBox = viewChild<ElementRef<HTMLInputElement>>('searchBox');

    readonly form = inject(FormBuilder).nonNullable.group({
        pattern:  '',
        abbrOnly: false,
    });

    // Generate a few abbreviation examples
    readonly abbrExamples = this.abbrService.random(4);

    private readonly appTitle       = $localize`Dutch Abbreviations`;
    private readonly appSearch      = $localize`Search`;
    private readonly appDescription = $localize`Common Dutch abbreviations and their translations into English`;

    constructor() {
        effect(() => {
            const pattern = this.q() ?? '';
            const abbrOnly = this.abbrOnly();

            // On parameter changes, update form values accordingly
            this.form.setValue({pattern, abbrOnly});

            // Also update page metadata
            this.metadataSvc.title       = `${this.appSearch}${pattern ? ': ' + pattern : ''} | ${this.appTitle}`;
            this.metadataSvc.description = this.appDescription;
        });
    }

    get searchParams(): Params {
        return this.getSearchParams(this.form.value);
    }

    ngOnInit(): void {
        // Subscribe to search text changes
        this.form.valueChanges
            .pipe(debounceTime(500), distinctUntilChanged())
            .subscribe(vals =>
                this.form.valid &&
                this.router.navigate(['/search'], {queryParams: this.getSearchParams(vals)}));

        // Focus the search box initially
        setTimeout(() => this.searchBox()?.nativeElement?.focus(), 100);
    }

    getSearchParams(vals: {pattern?: string, abbrOnly?: boolean}): Params {
        return {q: vals.pattern || undefined, a: vals.abbrOnly || undefined};
    }
}
