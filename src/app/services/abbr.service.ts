import { Injectable } from '@angular/core';
import { Abbreviation, abbreviations } from './abbreviations';

@Injectable({
    providedIn: 'root',
})
export class AbbrService {

    /**
     * Search the list of known abbreviations using the provided pattern and return a list of matching ones.
     * @param pattern substring to search.
     * @param lang language to use for translation matching, only if abbrOnly is falsy.
     * @param abbrOnly whether to only search the abbr field
     */
    find(pattern: string | null, lang: string, abbrOnly: boolean): Abbreviation[] {
        const s = this.cleanUp(pattern);
        return s ?
            abbreviations.filter(a =>
                this.cleanUp(a.abbr)?.includes(s) ||
                !abbrOnly && (this.cleanUp(a.text)?.includes(s) || this.cleanUp(a.translation[lang])?.includes(s))) :
            [];
    }

    /**
     * Finds and returns all abbreviation with the given abbr. It also finds an abbreviation that's the same as abbr but
     * includes a trailing dot.
     * @param abbr abbreviation to search.
     */
    findExact(abbr: string): Abbreviation[] {
        return abbreviations.filter(a => a.abbr === abbr || a.abbr === abbr + '.');
    }

    /**
     * Return the given number of random abbreviations.
     * @param count Number of abbreviations to return.
     */
    random(count: number): Abbreviation[] {
        return Array.from(Array(count).keys()).map(() => abbreviations[Math.floor(Math.random() * abbreviations.length)]);
    }

    /**
     * Return the input string, cleaned up from all non-alphanumeric characters and in UPPERCASE
     */
    private cleanUp(s: string | null | undefined): string | undefined {
        return s?.replace(/[^a-zа-яё0-9]+/ig, '').toUpperCase();
    }
}
