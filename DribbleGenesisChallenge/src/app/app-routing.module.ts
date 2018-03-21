import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShotListComponent } from './shared/components/shot-list/shot-list.component';
import { ShotDetailsComponent } from './shared/components/shot-details/shot-details.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '', component: ShotListComponent }, // default path
    { path: 'shot/:id', component: ShotDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
    ShotListComponent,
    ShotDetailsComponent
];