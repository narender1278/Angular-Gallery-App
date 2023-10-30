import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { GallerySettingsPageComponent } from './Components/gallery-settings-page/gallery-settings-page.component';
import { HomeBodyComponent } from './Components/home-body/home-body.component';
import { GalleryDetailsPageComponent } from './Components/gallery-details-page/gallery-details-page.component';
import { DetailsBodyComponent } from './Components/details-body/details-body.component';
import { MyControllerComponent } from './Components/my-controller/my-controller.component';
import { DisplayPageComponent } from './Components/display-page/display-page.component';
import { PostService } from './Services/post.service';
import { FormsModule } from '@angular/forms';
import { GallerySettingsBodyComponent } from './Components/gallery-settings-body/gallery-settings-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    GallerySettingsPageComponent,
    HomeBodyComponent,
    GalleryDetailsPageComponent,
    DetailsBodyComponent,
    MyControllerComponent,
    DisplayPageComponent,
    GallerySettingsBodyComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
