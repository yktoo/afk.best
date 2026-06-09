import { Component, computed, effect, ElementRef, inject, input, LOCALE_ID, signal, viewChild } from '@angular/core';
import { debounce, form, FormField } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { Abbreviation } from '../services/abbreviations';
import { AbbrService } from '../services/abbr.service';
import { MetadataService } from '../services/metadata.service';

/** Search data model. */
interface SearchData {
    /** Search pattern. */
    pattern: string;
    /** Look in the abbreviation only. */
    abbrOnly: boolean;
}

/** Search params recognised by this component. */
interface SearchParams {
    /** Search pattern. */
    q: string;
    /** Look in the abbreviation only. */
    a: boolean;
}

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    imports: [RouterLink, FormField],
})
export class SearchComponent {

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

    /** Search model signal. */
    readonly searchModel = signal<SearchData>({pattern: '', abbrOnly: false});

    /** Search form. */
    readonly form = form(this.searchModel, schema => debounce(schema, 500));

    /** Query (search) parameters. Gets updated when the search form value changes. */
    readonly queryParams = computed<SearchParams | undefined>(
        () => {
            const v = this.searchModel();
            return v ? {q: v.pattern, a: v.abbrOnly} : undefined;
        },
        // Since signal's changes cause a redirect to a new URL, it should only happen when there's an actual value change
        {equal: (a, b) => a?.q === b?.q && a?.a === b?.a});

    // Generate a few abbreviation examples
    readonly abbrExamples = this.abbrService.random(4);

    private readonly appTitle       = $localize`Dutch Abbreviations`;
    private readonly appSearch      = $localize`Search`;
    private readonly appDescription = $localize`Common Dutch abbreviations and their translations into English`;

    constructor() {
        effect(() => {
            const pattern = this.q() ?? '';
            const abbrOnly = this.abbrOnly();

            // On parameter changes, update form values and the query params accordingly
            this.searchModel.set({pattern, abbrOnly});

            // Also update page metadata
            this.metadataSvc.title       = `${this.appSearch}${pattern ? ': ' + pattern : ''} | ${this.appTitle}`;
            this.metadataSvc.description = this.appDescription;
        });

        // On query params change, navigate to the new URL
        effect(() => this.router.navigate(['/search'], {queryParams: this.queryParams()}));

        // Focus the search box initially
        let focused = false;
        effect(() => {
            if (!focused) {
                this.searchBox()?.nativeElement?.focus();
                focused = true;
            }
        });
    }
}
