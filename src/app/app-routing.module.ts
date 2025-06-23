import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoolrentModelosComponent } from './poolrent-modelos/poolrent-modelos.component';
import { PoolrentAboutComponent } from './poolrent-about/poolrent-about.component';
import { PoolrentContactComponent } from './poolrent-contact/poolrent-contact.component';

const routes: Routes = [
  {
    path: '',
    // component: PoolrentModelosComponent
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'modelos',
    component: PoolrentModelosComponent
  },
  {
    path: 'about',
    component: PoolrentAboutComponent
  },
  {
    path: 'contact',
    component: PoolrentContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
