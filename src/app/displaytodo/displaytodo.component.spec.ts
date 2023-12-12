import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytodoComponent } from './displaytodo.component';

describe('DisplaytodoComponent', () => {
  let component: DisplaytodoComponent;
  let fixture: ComponentFixture<DisplaytodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaytodoComponent]
    });
    fixture = TestBed.createComponent(DisplaytodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
