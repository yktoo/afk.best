import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {

    constructor(
        @Inject(LOCALE_ID) readonly locale: string,
    ) {}
}
