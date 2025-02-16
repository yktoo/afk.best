import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { AbbrComponent } from './abbr/abbr.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';

/**
 * Provide router and routing configuration
 */
export const provideRouting = () =>
    provideRouter(
        [
            {path: '',           pathMatch: 'full', redirectTo: '/search'},
            {path: 'abbr',       pathMatch: 'full', redirectTo: '/search'},
            {path: 'abbr/:abbr', component: AbbrComponent},
            {path: 'search',     component: SearchComponent},
            {path: '**',         component: NotFoundComponent},
        ],
        withComponentInputBinding(),
        withInMemoryScrolling({scrollPositionRestoration: 'enabled'}));
