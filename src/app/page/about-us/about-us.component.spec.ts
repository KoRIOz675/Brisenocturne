import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPageComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsPageComponent;
  let fixture: ComponentFixture<AboutUsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
