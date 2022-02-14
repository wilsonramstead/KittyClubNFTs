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


const routes: Routes = [
  { path: 'home', component: TotalCollectionComponent },
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
    { path: 'kitty12', component: Kitty12Component }
  ]},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
