import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { MetadataService } from './services/metadata.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

// Declared in index.html
declare let gaID: string;
declare let gtag: (key: string, id: string, params: any) => void;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [
        HeaderComponent,
        RouterOutlet,
        FooterComponent,
    ],
})
export class AppComponent {

    private readonly router = inject(Router);
    private readonly metadataSvc = inject(MetadataService);

    private readonly author = $localize`Dmitry Kann`;
    private readonly keywords = [
        $localize`abbreviation`,
        $localize`Dutch language`,
        $localize`Netherlands`,
        $localize`Holland`,
        $localize`translation`,
    ];
    private readonly description = $localize`Common Dutch abbreviations and their translations into English`;

    constructor() {
        this.metadataSvc.author      = this.author;
        this.metadataSvc.keywords    = this.keywords;
        this.metadataSvc.description = this.description;

        // Subscribe to route changes to submit page to Google Analytics
        this.router.events
            .pipe(takeUntilDestroyed(), filter(e => e instanceof NavigationEnd))
            .subscribe(e => gtag('config', gaID, {page_path: (e as NavigationEnd).urlAfterRedirects}));
    }
}
