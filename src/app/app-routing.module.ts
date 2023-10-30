import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { GallerySettingsPageComponent } from './Components/gallery-settings-page/gallery-settings-page.component';
import { GalleryDetailsPageComponent } from './Components/gallery-details-page/gallery-details-page.component';
import { DisplayPageComponent } from './Components/display-page/display-page.component';

const routes: Routes = [
  { path: '', component:HomePageComponent},
  { path: 'GallerySettings', component:GallerySettingsPageComponent},
  { path: 'GalleryOptions',component:GalleryDetailsPageComponent},
  { path: 'DisplayPage' ,component:DisplayPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
