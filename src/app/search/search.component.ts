import {
    Component,
    ElementRef,
    Inject,
    Input,
    LOCALE_ID,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Abbreviation } from '../services/abbreviations';
import { AbbrService } from '../services/abbr.service';
import { MetadataService } from '../services/metadata.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgFor,
        RouterLink,
        NgIf,
    ],
})
export class SearchComponent implements OnInit, OnChanges {

    @Input('q')
    pattern?: string;

    @Input('a')
    abbr?: string;

    @ViewChild('searchBox')
    searchBox?: ElementRef<HTMLInputElement>;

    abbreviations?: Abbreviation[];

    readonly form = this.fb.nonNullable.group({
        pattern:  '',
        abbrOnly: false,
    });

    // Generate a few abbreviation examples
    readonly abbrExamples = this.abbrService.random(4);

    private readonly appTitle       = $localize`Dutch Abbreviations`;
    private readonly appSearch      = $localize`Search`;
    private readonly appDescription = $localize`Common Dutch abbreviations and their translations into English`;

    constructor(
        @Inject(LOCALE_ID) readonly locale: string,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly fb: FormBuilder,
        private readonly metadataSvc: MetadataService,
        private readonly abbrService: AbbrService,
    ) {}

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
        setTimeout(() => this.searchBox?.nativeElement?.focus(), 100);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['pattern'] || changes['abbr']) {
            const abbrOnly = this.abbr === 'true';
            this.abbreviations = this.pattern ?
                this.abbrService.find(this.pattern, this.locale, abbrOnly) :
                undefined;
            this.form.setValue({pattern: this.pattern ?? '', abbrOnly});

            // Update page metadata
            this.metadataSvc.title       = `${this.appSearch}${this.pattern ? ': ' + this.pattern : ''} | ${this.appTitle}`;
            this.metadataSvc.description = this.appDescription;
        }
    }

    getSearchParams(vals: {pattern?: string, abbrOnly?: boolean}): Params {
        return {q: vals.pattern || undefined, a: vals.abbrOnly || undefined};
    }
}
