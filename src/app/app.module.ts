import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import{ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductService } from './product-list/product.service';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule,
  RouterModule.forRoot([
      { path: 'product-list',pathMatch: 'full', component: ProductListComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),],
  declarations: [ AppComponent, HelloComponent, ProductListComponent,ConvertToSpacesPipe, StarComponent, WelcomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService],
 
})
export class AppModule { }
