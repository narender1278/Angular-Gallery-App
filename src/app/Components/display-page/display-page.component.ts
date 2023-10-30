import { Component } from '@angular/core';
import { PostService } from '../../Services/post.service';
@Component({
  selector: 'app-display-page',
  template: `
    <app-navbar></app-navbar>


    <div style="display: flex; justify-content:center; align-items:center; height:80vh;  ">
      <div style="width:600px; border: 1px solid #ddd; border-radius: 3px; padding:30px;">
        <h4 style="text-decoration:underline; margin-bottom:20px;">Selected Options:</h4>
        <div style="display: flex; justify-content: space-between; ">
          <div style="width:250px">
            <h5>In gallary Settings:</h5>
            <ul>
              <li *ngFor="let option1 of selectedOptions1">{{ option1 }}</li>
            </ul>
            <ul>
              <li *ngFor="let option of selectedOptions">{{ option }}</li>
            </ul>
          </div>
          <div style="width:250px">
            <h5>In gallary Options:</h5>
            <ul>
              <li *ngFor="let option2 of selectedOptions2">{{ option2 }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    
    <app-footer></app-footer>
  `,
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent {
  selectedOptions: string[] = [];
  selectedOptions1: string[] = [];
  selectedOptions2: string[] = [];

  constructor(private postService: PostService) { 
    this.selectedOptions = this.postService.getSelectedOptions();
    this.selectedOptions1 = this.postService.getSelectedOptions1();
    this.selectedOptions2 = this.postService.getSelectedOptions2();

  }

  

  
}