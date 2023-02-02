import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecondPageComponent} from './second-page/second-page.component'
import {ThirdPageComponent} from './third-page/third-page.component'
import {FirstPageComponent} from './first-page/first-page.component'

const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'secondPage-component/:username', component: SecondPageComponent},
  {path: 'thirdPage-component', component: ThirdPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
