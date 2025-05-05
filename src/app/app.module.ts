import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsListComponent } from './models-list/models-list.component';

import {FormsModule} from '@angular/forms';
import { PoolrentAboutComponent } from './poolrent-about/poolrent-about.component';
import { PoolrentModelosComponent } from './poolrent-modelos/poolrent-modelos.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelsListComponent,
    PoolrentAboutComponent,
    PoolrentModelosComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
