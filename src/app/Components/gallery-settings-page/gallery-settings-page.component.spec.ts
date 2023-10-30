import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySettingsPageComponent } from './gallery-settings-page.component';

describe('GallerySettingsPageComponent', () => {
  let component: GallerySettingsPageComponent;
  let fixture: ComponentFixture<GallerySettingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallerySettingsPageComponent]
    });
    fixture = TestBed.createComponent(GallerySettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
