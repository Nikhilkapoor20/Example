import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabsModule } from "ngx-tabs";
import { LocationComponent } from '../locationcomponent/location.component';
import { HttpClientModule } from '@angular/common/http';
import { searchLocationComponent } from '../searchLocation/searchLocation.component';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from "ng2-completer";

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    searchLocationComponent,
  ],
  imports: [
    BrowserModule,
    TabsModule,
    HttpClientModule,
    FormsModule,
    Ng2CompleterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
