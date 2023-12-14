import { Component, Inject, LOCALE_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DOCUMENT, UpperCasePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [RouterLink, FontAwesomeModule, UpperCasePipe],
})
export class HeaderComponent {

    readonly languages = [
        {code: 'en', name: 'English'},
        {code: 'ru', name: 'Русский'},
        {code: 'nl', name: 'Nederlands'},
    ];

    readonly faInfoCircle = faInfoCircle;

    constructor(
        @Inject(LOCALE_ID) readonly locale: string,
        @Inject(DOCUMENT) private readonly doc: Document,
    ) {}

    /**
     * Returns the current URL but for the given language version of the app.
     */
    getLangUrl(lang: string): string {
        return this.doc.location.href.replace(`/${this.locale}/`, `/${lang}/`);
    }
}
