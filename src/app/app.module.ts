import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbbrService } from './services/abbr.service';
import { AbbrComponent } from './abbr/abbr.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        AbbrComponent,
        FooterComponent,
        SearchComponent,
        HeaderComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        AppRoutingModule,
    ],
    providers: [
        AbbrService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
