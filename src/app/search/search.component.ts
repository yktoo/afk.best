import { Component, computed, effect, ElementRef, inject, input, linkedSignal, LOCALE_ID, viewChild } from '@angular/core';
import { debounce, form, FormField } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { AbbrService } from '../services/abbr.service';
import { MetadataService } from '../services/metadata.service';

/** Search data model. */
interface SearchData {
    /** Search pattern. */
    pattern: string;
    /** Look in the abbreviation only. */
    abbrOnly: boolean;
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

    private readonly appTitle       = $localize`Dutch Abbreviations`;
    private readonly appSearch      = $localize`Search`;

    /** Query string, populated from a query param. */
    readonly q = input<string>();

    /** Whether to search abbreviations only (as a string), populated from a query param. */
    readonly a = input<string>();

    /** Whether to search abbreviations only (as a boolean). */
    readonly abbrOnly = computed(() => this.a() === 'true');

    /** Found abbreviations, or `undefined` if no pattern (`q`) is entered. */
    readonly abbreviations = computed(() => this.abbrService.find(this.q(), this.locale, this.abbrOnly()));

    /** The search input box. */
    readonly searchBox = viewChild.required<ElementRef<HTMLInputElement>>('searchBox');

    /** Search model signal. */
    readonly searchModel = linkedSignal<SearchData>(() => ({pattern: this.q() ?? '', abbrOnly: this.abbrOnly()}));

    /** Search form. */
    readonly form = form(this.searchModel, schema => debounce(schema, 500));

    // Generate a few abbreviation examples
    readonly abbrExamples = this.abbrService.random(4);

    constructor() {
        // Update document title on pattern change
        effect(() => this.metadataSvc.title = this.appSearch + (this.abbreviations() ? `: ${this.q()}` : '') + ` | ${this.appTitle}`);

        // On query params change, navigate to the new URL
        effect(() => this.router.navigate(['/search'], {queryParams: {q: this.form.pattern().value(), a: this.form.abbrOnly().value()}}));

        // Focus the search box initially
        let focused = false;
        effect(() => !focused && (focused = true) && this.searchBox().nativeElement?.focus());
    }
}
