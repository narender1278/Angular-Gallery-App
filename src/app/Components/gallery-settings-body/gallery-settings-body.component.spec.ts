import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySettingsBodyComponent } from './gallery-settings-body.component';

describe('GallerySettingsBodyComponent', () => {
  let component: GallerySettingsBodyComponent;
  let fixture: ComponentFixture<GallerySettingsBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallerySettingsBodyComponent]
    });
    fixture = TestBed.createComponent(GallerySettingsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
