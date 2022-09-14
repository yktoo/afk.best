import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbbrComponent } from './abbr/abbr.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '',                pathMatch: 'full', redirectTo: '/search'},
    {path: 'search',          component: HomeComponent},
    {path: 'search/:pattern', component: HomeComponent},
    {path: 'abbr/:abbr',      component: AbbrComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
