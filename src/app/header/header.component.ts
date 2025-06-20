import { Component, LOCALE_ID, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DOCUMENT, UpperCasePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [RouterLink, FontAwesomeModule, UpperCasePipe],
})
export class HeaderComponent {
    readonly locale = inject(LOCALE_ID);
    private readonly doc = inject<Document>(DOCUMENT);


    readonly languages = [
        {code: 'en', name: 'English'},
        {code: 'ru', name: 'Русский'},
        {code: 'nl', name: 'Nederlands'},
    ];

    readonly faInfoCircle = faInfoCircle;

    /**
     * Returns the current URL but for the given language version of the app.
     */
    getLangUrl(lang: string): string {
        return this.doc.location.href.replace(`/${this.locale}/`, `/${lang}/`);
    }
}
