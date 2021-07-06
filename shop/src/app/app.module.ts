import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceport } from './common/auth.interceptor';
import { MainLayoutComponent } from './common/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    QuillModule.forRoot(),
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass:AuthInterceport
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
