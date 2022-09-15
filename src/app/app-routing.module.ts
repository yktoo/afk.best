import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbbrComponent } from './abbr/abbr.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {path: '',           pathMatch: 'full', redirectTo: '/search'},
    {path: 'search',     component: SearchComponent},
    {path: 'abbr/:abbr', component: AbbrComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
