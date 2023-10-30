import { Component } from '@angular/core';
import { PostService } from '../../Services/post.service';
@Component({
  selector: 'app-my-controller',
  template: `
      
        <div class="d-flex justify-content-between mx-3" ng-app="myApp">
          <div ng-controller="myController" class="my-3">
            <label style=" font-weight:bold; font-size:16px;">
              <input type="radio" (click)="toggleCheckboxes1()" ng-value="true" (change)="updateSelectedOptions1($event, 'Products')"> Products
            </label>
                    
            <div ng-show="showCheckboxes" class="d-flex flex-column" style=" font-size:14px;">
              <label *ngIf="showCheckboxes1">
                <input type="checkbox" (change)="updateSelectedOptions1($event, 'Show Type')" > Show Type
              </label>
              <label *ngIf="showCheckboxes1">
                <input type="checkbox" (change)="updateSelectedOptions1($event, 'Show Catogory')" > Show Catogory
              </label>
              <label *ngIf="showCheckboxes1">
                <input type="checkbox" (change)="updateSelectedOptions1($event, 'Show Range')" > Show Range
              </label>
            </div>
          </div>
          <div ng-controller="myController" class="my-3">
            <label style=" font-weight:bold; font-size:16px; padding-right:60px;">
              <input type="radio" (click)="toggleCheckboxes2()" ng-value="true" (change)="updateSelectedOptions1($event, 'Inventory')"> Inventory
            </label>
                    
            <div ng-show="showCheckboxes" class="d-flex flex-column" style=" font-size:14px;">
              <label *ngIf="showCheckboxes2">
                <input type="checkbox" (change)="updateSelectedOptions1($event, 'Show Average Size')"> Show Average Size
              </label >
              <label *ngIf="showCheckboxes2">
                <input type="checkbox" (change)="updateSelectedOptions1($event, 'Show Lot/Bundle #')"> Show Lot/Bundle #
              </label>
              <label *ngIf="showCheckboxes2">
                <input type="checkbox" (change)="updateSelectedOptions1($event, 'Show Qty/Slab Count')"> Show Qty/Slab Count
              </label>
              <label *ngIf="showCheckboxes2">
                <input type="checkbox" (change)="updateSelectedOptions1($event, 'Show Group')"> Show Group
              </label>
            </div>
          </div>
        </div>
  `,
  styleUrls: ['./my-controller.component.css']
})
export class MyControllerComponent {
  showCheckboxes1 = false;
  showCheckboxes2 = false;

  toggleCheckboxes1() {
    this.showCheckboxes1 = !this.showCheckboxes1;
  }
  toggleCheckboxes2() {
    this.showCheckboxes2 = !this.showCheckboxes2;
  }


  selectedOptions1: string[] = [];

  constructor(private postService:PostService) { }

  updateSelectedOptions1(event: Event, labelText: string) {
    if ((event.target as HTMLInputElement).checked) {
      this.selectedOptions1.push(labelText);
    } else {
      const index = this.selectedOptions1.indexOf(labelText);
      if (index !== -1) {
        this.selectedOptions1.splice(index, 1);
      }
    }

    // Store the selected options in the service
    this.postService.storeSelectedOptions1(this.selectedOptions1);
  }
}



