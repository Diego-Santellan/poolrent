import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsListComponent } from './models-list/models-list.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PoolrentAboutComponent } from './poolrent-about/poolrent-about.component';
import { PoolrentModelosComponent } from './poolrent-modelos/poolrent-modelos.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { PoolrentContactComponent } from './poolrent-contact/poolrent-contact.component';
import { PoolrentContactformComponent } from './poolrent-contactform/poolrent-contactform.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelsListComponent,
    PoolrentAboutComponent,
    PoolrentModelosComponent,
    CartComponent,
    InputIntegerComponent,
    PoolrentContactComponent,
    PoolrentContactformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
