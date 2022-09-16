import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/**
 * Service that controls the page metadata, such as the title and meta tags.
 */
@Injectable({
    providedIn: 'root',
})
export class MetadataService {

    constructor(
        private readonly titleSvc: Title,
        private readonly metaSvc: Meta,
    ) {}

    /**
     * Set the author of the page.
     */
    set author(author: string) {
        this.metaSvc.addTag({author});
    }

    /**
     * Set the description of the page.
     */
    set description(description: string) {
        this.metaSvc.addTag({description});
    }

    /**
     * Set the keywords of the page.
     */
    set keywords(kw: string[]) {
        this.metaSvc.addTag({keywords: kw.join(',')});
    }

    /**
     * Set the title of the page.
     */
    set title(s: string) {
        this.titleSvc.setTitle(s || 'afk.best');
    }
}
