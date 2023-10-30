import { Component} from '@angular/core';
@Component({
  selector: 'app-home-body',
  template: `
  <div style="padding-top: 20px;"><h5 style="padding-left: 498px; text-decoration: underline;">Gallery Home Page:</h5></div>
  <div class="d-flex justify-content-center align-items-center home-body-1">
      <div class="m-3 container home-body">
      <div class="my-3">
        <label for="basic-url" class="form-label">Enter the website URL:</label>
        <input type="text"  class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
      </div>
      <div class="my-3">
        <label for="basic-url" class="form-label">Token:</label>
        <input type="text"  class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
      </div>
      <div class="home-button-div my-4"><a routerLink="/GallerySettings"><button  type="button" class="btn ">NEXT</button></a></div>
    </div>
    
  </div>
`,
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent   {
  

  
}


 