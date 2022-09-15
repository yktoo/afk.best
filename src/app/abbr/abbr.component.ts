import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AbbrService } from '../services/abbr.service';
import { Abbreviation } from '../services/abbreviations';

@UntilDestroy()
@Component({
    selector: 'app-abbr',
    templateUrl: './abbr.component.html',
})
export class AbbrComponent implements OnInit {

    abbr?: string | null;
    abbreviation?: Abbreviation | null;

    constructor(
        @Inject(LOCALE_ID) readonly locale: string,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly abbrService: AbbrService,
    ) {}

    ngOnInit(): void {
        // Subscribe to route changes to load the specified abbreviation
        this.route.paramMap
            .pipe(untilDestroyed(this))
            .subscribe(pm => {
                this.abbr = pm.get('abbr');
                this.abbreviation = this.abbr ? this.abbrService.findOne(this.abbr) : null;
            });
    }

    share() {
        // TODO
    }
}
