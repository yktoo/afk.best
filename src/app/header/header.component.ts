import { Component, Inject, LOCALE_ID } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

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
    ) {}
}
