import { Component, Inject, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbbrService } from '../services/abbr.service';

@Component({
    selector: 'app-abbr',
    templateUrl: './abbr.component.html',
})
export class AbbrComponent {

    constructor(
        @Inject(LOCALE_ID) readonly locale: string,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly abbrService: AbbrService,
    ) {}

    ngOnInit(): void {
        // TODO
    }
}
