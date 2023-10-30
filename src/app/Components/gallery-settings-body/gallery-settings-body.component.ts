import { Component } from '@angular/core';
import { PostService } from '../../Services/post.service';

@Component({
  selector: 'app-gallery-settings-body',
  template: `
  <form>
    <div ><h5 style="padding-left: 500px; text-decoration: underline;">Website Gallery Settings:</h5></div>
    <div class="d-flex justify-content-center align-items-center gallery-body-1">
      <div class="m-3 container  gallery-body">
                <app-my-controller></app-my-controller>
                <div>
                    <p style="font-size:14px;">While User Sending gallery images to his email address,email address that should be considered as from mail is: <a href="#" class="link-primary" style="text-decoration: none;">Chaitanya@stoneprofits.com</a></p>
                </div>
                <div style="margin-top: 10px;"><h6 style=" font-weight:bold;">Other Settings:</h6></div>
                <div class="d-flex flex-column">
                  <label>
                    <input   type="checkbox" (change)="updateSelectedOptions($event, 'New Product Flag')" > New Product Flag
                  </label>
                  <label>
                    <input type="checkbox" (change)="updateSelectedOptions($event, 'Green Product Flag')" > Green Product Flag
                  </label>
                  <label>
                    <input type="checkbox" (change)="updateSelectedOptions($event, 'Show Feature Product on Top of Gallery')" > Show Feature Product on Top of Gallery
                  </label>
                  <label>
                    <input type="checkbox" (change)="updateSelectedOptions($event, 'Include Products without Inventory in stock')" > Include Products without Inventory in stock
                  </label>
                  <label>
                    <input type="checkbox" (change)="updateSelectedOptions($event, 'Show Location in the Inventory thumbnail.')" > Show Location in the Inventory thumbnail.
                  </label>
                
                  <div class="d-flex justify-content-between">
                    <label>
                      <input type="radio" (change)="updateSelectedOptions($event, 'Image Preview in Popup Layer')" > Image Preview in Popup Layer
                    </label>
                    <label>
                      <input type="radio" (change)="updateSelectedOptions($event, 'Image Preview in Fullscreen Slider')" > Image Preview in Fullscreen Slider
                    </label>
                  </div>
                </div>
                <div class="home-button-div my-4 d-flex justify-content-end" ><a routerLink="/GalleryOptions" ><button type="submit" class="btn ">NEXT</button></a></div>
      </div>
    </div>
</form>
`,
  styleUrls: ['./gallery-settings-body.component.css']
})
export class GallerySettingsBodyComponent {
  selectedOptions: string[] = [];

  constructor(private postService:PostService) { }

  updateSelectedOptions(event: Event, labelText: string) {
    if ((event.target as HTMLInputElement).checked) {
      this.selectedOptions.push(labelText);
    } else {
      const index = this.selectedOptions.indexOf(labelText);
      if (index !== -1) {
        this.selectedOptions.splice(index, 1);
      }
    }

    // Store the selected options in the service
    this.postService.storeSelectedOptions(this.selectedOptions);
  }
}
