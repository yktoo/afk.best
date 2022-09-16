import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MetadataService } from './services/metadata.service';

// Declared in index.html
declare let gaID: string;
declare let gtag: (key: string, id: string, params: any) => void;

@UntilDestroy()
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    private readonly author = $localize`Dmitry Kann`;
    private readonly keywords = [
        $localize`abbreviation`,
        $localize`Dutch language`,
        $localize`Netherlands`,
        $localize`Holland`,
        $localize`translation`,
    ];

    constructor(
        private readonly router: Router,
        private readonly metadataSvc: MetadataService,
    ) {
        this.metadataSvc.author   = this.author;
        this.metadataSvc.keywords = this.keywords;

        // Subscribe to route changes to submit page to Google Analytics
        this.router.events
            .pipe(untilDestroyed(this), filter(e => e instanceof NavigationEnd))
            .subscribe(e => gtag('config', gaID, {page_path: (e as NavigationEnd).urlAfterRedirects}));
    }
}
