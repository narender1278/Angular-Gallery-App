import { Component } from '@angular/core';
import { PostService } from '../../Services/post.service';
@Component({
  selector: 'app-details-body',
  templateUrl: './details-body.component.html',
  styleUrls: ['./details-body.component.css']
})
export class DetailsBodyComponent {
  selectedOptions2: string[] = [];

  constructor(private postService:PostService) { }

  updateSelectedOptions2(event: Event, labelText: string) {
    if ((event.target as HTMLInputElement).checked) {
      this.selectedOptions2.push(labelText);
    } else {
      const index = this.selectedOptions2.indexOf(labelText);
      if (index !== -1) {
        this.selectedOptions2.splice(index, 1);
      }
    }

    // Store the selected options in the service
    this.postService.storeSelectedOptions2(this.selectedOptions2);
  }
}
