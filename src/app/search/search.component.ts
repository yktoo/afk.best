import { Component, computed, effect, ElementRef, inject, input, linkedSignal, LOCALE_ID, OnInit, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { Abbreviation } from '../services/abbreviations';
import { AbbrService } from '../services/abbr.service';
import { MetadataService } from '../services/metadata.service';

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

    /** Search form value, debounced. Undefined when invalid. */
    readonly formValue = toSignal(this.form.valueChanges.pipe(debounceTime(500), map(v => this.form.valid ? v : undefined)));

    /**
     * Query (search) parameters. Gets updated when the search form value changes (delayed) or on URL query params
     * changes (immediately).
     */
    readonly queryParams = linkedSignal<SearchParams | undefined>(
        () => this.toQueryParams(this.formValue()?.pattern, this.formValue()?.abbrOnly),
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
            this.form.setValue({pattern, abbrOnly}, {emitEvent: false});
            this.queryParams.set(this.toQueryParams(pattern, abbrOnly));

            // Also update page metadata
            this.metadataSvc.title       = `${this.appSearch}${pattern ? ': ' + pattern : ''} | ${this.appTitle}`;
            this.metadataSvc.description = this.appDescription;
        });

        // On query params change, navigate to the new URL
        effect(() => this.router.navigate(['/search'], {queryParams: this.queryParams()}));
    }

    ngOnInit(): void {
        // Focus the search box initially
        setTimeout(() => this.searchBox()?.nativeElement?.focus(), 100);
    }

    toQueryParams(pattern?: string, abbrOnly?: boolean): SearchParams | undefined {
        return pattern ? {q: pattern, a: !!abbrOnly} : undefined;
    }
}
