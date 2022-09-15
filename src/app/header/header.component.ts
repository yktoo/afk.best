import { Component, Inject, LOCALE_ID } from '@angular/core';

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

    constructor(
        @Inject(LOCALE_ID) readonly locale: string,
    ) {}
}
