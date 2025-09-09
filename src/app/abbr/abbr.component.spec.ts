import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { AbbrComponent } from './abbr.component';

describe('AbbrComponent', () => {

    let component: AbbrComponent;
    let fixture: ComponentFixture<AbbrComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AbbrComponent, RouterModule.forRoot([]), FontAwesomeTestingModule],
            providers: [provideZonelessChangeDetection()],
        })
            .compileComponents();

        fixture = TestBed.createComponent(AbbrComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('is created', () => {
        expect(component).toBeTruthy();
    });
});
