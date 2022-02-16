import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TotalCollectionComponent } from './total-collection/total-collection.component';
import { Kitty1Component } from './kitty1/kitty1.component';
import { Kitty2Component } from './kitty2/kitty2.component';
import { Kitty3Component } from './kitty3/kitty3.component';
import { Kitty4Component } from './kitty4/kitty4.component';
import { Kitty5Component } from './kitty5/kitty5.component';
import { Kitty6Component } from './kitty6/kitty6.component';
import { Kitty7Component } from './kitty7/kitty7.component';
import { Kitty8Component } from './kitty8/kitty8.component';
import { Kitty9Component } from './kitty9/kitty9.component';
import { Kitty10Component } from './kitty10/kitty10.component';
import { Kitty11Component } from './kitty11/kitty11.component';
import { Kitty12Component } from './kitty12/kitty12.component';

import { Kitty13Component } from './kitty13/kitty13.component';
import { Kitty14Component } from './kitty14/kitty14.component';
import { Kitty15Component } from './kitty15/kitty15.component';
import { Kitty16Component } from './kitty16/kitty16.component';
import { Kitty17Component } from './kitty17/kitty17.component';
import { Kitty18Component } from './kitty18/kitty18.component';
import { Kitty19Component } from './kitty19/kitty19.component';
import { Kitty20Component } from './kitty20/kitty20.component';
import { Kitty21Component } from './kitty21/kitty21.component';
import { Kitty22Component } from './kitty22/kitty22.component';
import { Kitty23Component } from './kitty23/kitty23.component';
import { Kitty24Component } from './kitty24/kitty24.component';
import { Kitty25Component } from './kitty25/kitty25.component';
import { Kitty26Component } from './kitty26/kitty26.component';



const routes: Routes = [
  { path: '', component: TotalCollectionComponent },
  { path: 'nfts', children: [
    // { path: '', pathMatch: 'full', component: ListComponent,},
    { path: 'kitty1', component: Kitty1Component },
    { path: 'kitty2', component: Kitty2Component },
    { path: 'kitty3', component: Kitty3Component },
    { path: 'kitty4', component: Kitty4Component },
    { path: 'kitty5', component: Kitty5Component },
    { path: 'kitty6', component: Kitty6Component },
    { path: 'kitty7', component: Kitty7Component },
    { path: 'kitty8', component: Kitty8Component },
    { path: 'kitty9', component: Kitty9Component },
    { path: 'kitty10', component: Kitty10Component },
    { path: 'kitty11', component: Kitty11Component },
    { path: 'kitty12', component: Kitty12Component },
    { path: 'kitty13', component: Kitty13Component },
    { path: 'kitty14', component: Kitty14Component },
    { path: 'kitty15', component: Kitty15Component },
    { path: 'kitty16', component: Kitty16Component },
    { path: 'kitty17', component: Kitty17Component },
    { path: 'kitty18', component: Kitty18Component },
    { path: 'kitty19', component: Kitty19Component },
    { path: 'kitty20', component: Kitty20Component },
    { path: 'kitty21', component: Kitty21Component },
    { path: 'kitty22', component: Kitty22Component },
    { path: 'kitty23', component: Kitty23Component },
    { path: 'kitty24', component: Kitty24Component },
    { path: 'kitty25', component: Kitty25Component },
    { path: 'kitty26', component: Kitty26Component },
  ]},
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
