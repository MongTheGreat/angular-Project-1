import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import{ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductServiceService } from './product-list/product-service.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule],
  declarations: [ AppComponent, HelloComponent, ProductListComponent,ConvertToSpacesPipe, StarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductServiceService]
})
export class AppModule { }
