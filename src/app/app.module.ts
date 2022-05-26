import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {HeaderComponent} from './components/frames/header/header.component';
import {NavbarComponent} from './components/frames/navbar/navbar.component';
import {MainComponent} from './components/frames/main/main.component';
import {FooterComponent} from './components/frames/footer/footer.component';
import { LoaderComponent } from './components/UI/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
