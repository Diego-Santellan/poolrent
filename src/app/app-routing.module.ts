import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoolrentModelosComponent } from './poolrent-modelos/poolrent-modelos.component';
import { PoolrentAboutComponent } from './poolrent-about/poolrent-about.component';

const routes: Routes = [
  {
    path: '',
    // component: PoolrentModelosComponent
    redirectTo: 'modelos',
    pathMatch: 'full'
  },
  {
    path: 'modelos',
    component: PoolrentModelosComponent
  },
  {
    path: 'about',
    component: PoolrentAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
