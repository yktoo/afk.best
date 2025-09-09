import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AbbrService } from './abbr.service';

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
});
