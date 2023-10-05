import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { AbbrComponent } from './abbr.component';

describe('AbbrComponent', () => {
    let component: AbbrComponent;
    let fixture: ComponentFixture<AbbrComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, FontAwesomeTestingModule, AbbrComponent],
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
