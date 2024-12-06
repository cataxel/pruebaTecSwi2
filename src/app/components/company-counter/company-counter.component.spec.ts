import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCounterComponent } from './company-counter.component';

describe('CompanyCounterComponent', () => {
  let component: CompanyCounterComponent;
  let fixture: ComponentFixture<CompanyCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
