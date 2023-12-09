import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudoprComponent } from './crudopr.component';

describe('CrudoprComponent', () => {
  let component: CrudoprComponent;
  let fixture: ComponentFixture<CrudoprComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudoprComponent]
    });
    fixture = TestBed.createComponent(CrudoprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
