import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbbrComponent } from './abbr/abbr.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {path: '',           pathMatch: 'full', redirectTo: '/search'},
    {path: 'search',     component: SearchComponent},
    {path: 'abbr',       pathMatch: 'full', redirectTo: '/search'},
    {path: 'abbr/:abbr', component: AbbrComponent},
    {path: '**',         component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
