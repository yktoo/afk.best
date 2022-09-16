import { Component, Inject, LOCALE_ID } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
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
