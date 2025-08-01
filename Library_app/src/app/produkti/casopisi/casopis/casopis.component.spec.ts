import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasopisComponent } from './casopis.component';

describe('CasopisComponent', () => {
  let component: CasopisComponent;
  let fixture: ComponentFixture<CasopisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasopisComponent]
    });
    fixture = TestBed.createComponent(CasopisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
