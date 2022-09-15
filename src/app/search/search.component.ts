import { Component, ElementRef, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Abbreviation } from '../services/abbreviations';
import { AbbrService } from '../services/abbr.service';

@UntilDestroy()
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

    @ViewChild('searchBox')
    searchBox?: ElementRef<HTMLInputElement>;

    abbreviations?: Abbreviation[];

    readonly form = this.fb.nonNullable.group({
        pattern:  '',
        abbrOnly: false,
    });

    // Generate a few abbreviation examples
    readonly abbrExamples = this.abbrService.random(4);

    constructor(
        @Inject(LOCALE_ID) readonly locale: string,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly fb: FormBuilder,
        private readonly abbrService: AbbrService,
    ) {}

    ngOnInit(): void {
        // Subscribe to route changes to update the filtered list
        this.route.queryParamMap
            .pipe(untilDestroyed(this))
            .subscribe(pm => {
                const pattern = pm.get('q') ?? '';
                const abbrOnly = pm.get('a') === 'true';
                this.abbreviations = pattern ?
                    this.abbrService.find(pattern, this.locale, abbrOnly) :
                    undefined;
                this.form.setValue({pattern, abbrOnly});
            });

        // Subscribe to search text changes
        this.form.valueChanges
            .pipe(debounceTime(500), distinctUntilChanged())
            .subscribe(vals =>
                this.form.valid &&
                this.router.navigate(
                    ['/search'],
                    {
                        queryParams: {q: vals.pattern || undefined, a: vals.abbrOnly || undefined},
                    }));

        // Focus the search box initially
        setTimeout(() => this.searchBox?.nativeElement?.focus(), 100);
    }
}
