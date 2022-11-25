import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCategoryComponent } from './stock-category.component';

describe('StockCategoryComponent', () => {
  let component: StockCategoryComponent;
  let fixture: ComponentFixture<StockCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
