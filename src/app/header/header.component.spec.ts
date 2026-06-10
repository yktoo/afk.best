import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {

    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
                imports: [HeaderComponent, RouterModule.forRoot([]), FontAwesomeTestingModule],
                providers: [provideZonelessChangeDetection()],
            })
            .compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('is created', () => {
        expect(component).toBeTruthy();
    });

    it('generates language URL', () => {
        // Mimic a language-aware URL
        jsdom.reconfigure({url: 'https://foo.bar/en/search'});
        expect(component.getLangUrl('fr')).toBe('https://foo.bar/fr/search');
    });
});
