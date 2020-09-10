import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OpenVideoComponent } from './models/open-video/open-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ViewAllComponent,
    OpenVideoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,MaterialModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
