import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentIndexComponent } from './main-content-index.component';

describe('MainContentIndexComponent', () => {
  let component: MainContentIndexComponent;
  let fixture: ComponentFixture<MainContentIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
