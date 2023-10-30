import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDetailsPageComponent } from './gallery-details-page.component';

describe('GalleryDetailsPageComponent', () => {
  let component: GalleryDetailsPageComponent;
  let fixture: ComponentFixture<GalleryDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryDetailsPageComponent]
    });
    fixture = TestBed.createComponent(GalleryDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
