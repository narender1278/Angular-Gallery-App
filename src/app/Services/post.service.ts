import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class PostService {
  selectedOptions: string[] = [];
  selectedOptions1: string[] = [];
  selectedOptions2: string[] = [];

  storeSelectedOptions(options: string[]) {
    // You can manipulate or process the selectedOptions if needed.
    this.selectedOptions = options;
  }
  storeSelectedOptions1(options1: string[]) {
    // You can manipulate or process the selectedOptions if needed.
    this.selectedOptions1 = options1;
  }
  storeSelectedOptions2(options2: string[]) {
    // You can manipulate or process the selectedOptions if needed.
    this.selectedOptions2 = options2;
  }
  getSelectedOptions() {
    return this.selectedOptions;
  }
  getSelectedOptions1() {
    return this.selectedOptions1;
  }
  getSelectedOptions2() {
    return this.selectedOptions2;
  }
}


