import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponentComponent } from './component/customer-component/customer-component.component';
import { CustomerServiceService } from './service/customer-service.service';
import { AboutUsComponent } from './component/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponentComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
