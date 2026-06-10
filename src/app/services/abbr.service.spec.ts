import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AbbrService } from './abbr.service';
import { Abbreviation } from './abbreviations';

describe('AbbrService', () => {

    let service: AbbrService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        service = TestBed.inject(AbbrService);
    });

    it('is created', () => {
        expect(service).toBeTruthy();
    });

    const abbrNv:  Partial<Abbreviation> = {abbr: 'N.V.', text: 'Naamloze Vennootschap'};
    const abbrNvh: Partial<Abbreviation> = {abbr: 'NVH', text: 'Niet voor handelsdoeleinden'};
    const abbrNvt: Partial<Abbreviation> = {abbr: 'n.v.t.', text: 'niet van toepassing'};
    const abbrTnv: Partial<Abbreviation> = {abbr: 't.n.v.', text: 'ten name van'};
    const abbrOzb: Partial<Abbreviation> = {abbr: 'ozb', text: 'onroerendezaakbelasting'};
    const abbrOzo: Partial<Abbreviation> = {abbr: 'O.Z.O.', text: 'oostzuidoosten'};
    const abbrZoz: Partial<Abbreviation> = {abbr: 'z.o.z.', text: 'zie ommezijde'};

    [
        // None
        {in: {pattern: undefined,  lang: '',   abbrOnly: false}},
        {in: {pattern: null,       lang: '',   abbrOnly: false}},
        {in: {pattern: '',         lang: '',   abbrOnly: false}},
        {in: {pattern: '',         lang: 'en', abbrOnly: false}},

        // Dutch
        {in: {pattern: 'nvt',      lang: 'nl', abbrOnly: false}, want: [abbrNvt]},
        {in: {pattern: 'n.vt',     lang: 'nl', abbrOnly: false}, want: [abbrNvt]},
        {in: {pattern: 'nvt.',     lang: 'nl', abbrOnly: false}, want: [abbrNvt]},
        {in: {pattern: 'N.V.T.',   lang: 'nl', abbrOnly: false}, want: [abbrNvt]},
        {in: {pattern: 'nvt',      lang: 'nl', abbrOnly: true},  want: [abbrNvt]},
        {in: {pattern: 'N.V=T.',   lang: 'nl', abbrOnly: true},  want: [abbrNvt]},
        {in: {pattern: 'nvh',      lang: 'nl', abbrOnly: false}, want: [abbrNvh]},
        {in: {pattern: 'nvh',      lang: 'nl', abbrOnly: true},  want: [abbrNvh]},
        {in: {pattern: 'nv',       lang: 'nl', abbrOnly: true},  want: [abbrNv, abbrNvh, abbrNvt, abbrTnv]},
        {in: {pattern: 'oz',       lang: 'nl', abbrOnly: false}, want: [abbrNv, abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'o.z',      lang: 'nl', abbrOnly: false}, want: [abbrNv, abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'o.z.',     lang: 'nl', abbrOnly: false}, want: [abbrNv, abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'OZ',       lang: 'nl', abbrOnly: false}, want: [abbrNv, abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'O.Z.',     lang: 'nl', abbrOnly: false}, want: [abbrNv, abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'oz',       lang: 'nl', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'o-z',      lang: 'nl', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'oz.',      lang: 'nl', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'o.z.',     lang: 'nl', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'OZ',       lang: 'nl', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'O.Z',      lang: 'nl', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'OZ.',      lang: 'nl', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'O.Z.',     lang: 'nl', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'ten name', lang: 'nl', abbrOnly: false}, want: [abbrTnv]},
        {in: {pattern: 'ten.name', lang: 'nl', abbrOnly: false}, want: [abbrTnv]},
        {in: {pattern: 'ten/name', lang: 'nl', abbrOnly: false}, want: [abbrTnv]},
        {in: {pattern: 'tenname',  lang: 'nl', abbrOnly: false}, want: [abbrTnv]},
        {in: {pattern: 'tenN,aMe', lang: 'nl', abbrOnly: false}, want: [abbrTnv]},
        {in: {pattern: 'ten name', lang: 'nl', abbrOnly: true},  want: []},

        // English
        {in: {pattern: 'nvt',      lang: 'en', abbrOnly: false}, want: [abbrNvt]},
        {in: {pattern: 'n.vt',     lang: 'en', abbrOnly: false}, want: [abbrNvt]},
        {in: {pattern: 'nvt.',     lang: 'en', abbrOnly: false}, want: [abbrNvt]},
        {in: {pattern: 'N.V.T.',   lang: 'en', abbrOnly: false}, want: [abbrNvt]},
        {in: {pattern: 'nvt',      lang: 'en', abbrOnly: true},  want: [abbrNvt]},
        {in: {pattern: 'N.V=T.',   lang: 'en', abbrOnly: true},  want: [abbrNvt]},
        {in: {pattern: 'nvh',      lang: 'en', abbrOnly: false}, want: [abbrNvh]},
        {in: {pattern: 'nvh',      lang: 'en', abbrOnly: true},  want: [abbrNvh]},
        {in: {pattern: 'nv',       lang: 'en', abbrOnly: true},  want: [abbrNv, abbrNvh, abbrNvt, abbrTnv]},
        {in: {pattern: 'oz',       lang: 'en', abbrOnly: false}, want: [abbrNv, abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'o.z',      lang: 'en', abbrOnly: false}, want: [abbrNv, abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'o.z.',     lang: 'en', abbrOnly: false}, want: [abbrNv, abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'OZ',       lang: 'en', abbrOnly: false}, want: [abbrNv, abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'O.Z.',     lang: 'en', abbrOnly: false}, want: [abbrNv, abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'oz',       lang: 'en', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'o-z',      lang: 'en', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'oz.',      lang: 'en', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'o.z.',     lang: 'en', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'OZ',       lang: 'en', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'O.Z',      lang: 'en', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'OZ.',      lang: 'en', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},
        {in: {pattern: 'O.Z.',     lang: 'en', abbrOnly: true},  want: [abbrOzb, abbrOzo, abbrZoz]},

        // Russian
        {in: {pattern: 'на имя',   lang: 'ru', abbrOnly: false}, want: [abbrTnv]},
        {in: {pattern: 'на.имя',   lang: 'ru', abbrOnly: false}, want: [abbrTnv]},
        {in: {pattern: 'наимя',    lang: 'ru', abbrOnly: false}, want: [abbrTnv]},
        {in: {pattern: 'наИм.Я',   lang: 'ru', abbrOnly: false}, want: [abbrTnv]},
        {in: {pattern: 'на имя',   lang: 'ru', abbrOnly: true},  want: []},
    ]
        .forEach(test =>
            it(`given ${JSON.stringify(test.in)}, returns ${JSON.stringify(test.want)}`, () => {
                const got = service.find(test.in.pattern, test.in.lang, test.in.abbrOnly);
                if (test.want) {
                    expect(got).toEqual(test.want.map(w => expect.objectContaining(w)));
                } else {
                    expect(got).toBeUndefined();
                }
            }));
});
