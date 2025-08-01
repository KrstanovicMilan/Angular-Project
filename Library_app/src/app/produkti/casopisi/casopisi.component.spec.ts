import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasopisiComponent } from './casopisi.component';

describe('CasopisiComponent', () => {
  let component: CasopisiComponent;
  let fixture: ComponentFixture<CasopisiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasopisiComponent]
    });
    fixture = TestBed.createComponent(CasopisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
