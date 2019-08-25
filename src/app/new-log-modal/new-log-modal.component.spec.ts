import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLogModalComponent } from './new-log-modal.component';

describe('NewLogModalComponent', () => {
  let component: NewLogModalComponent;
  let fixture: ComponentFixture<NewLogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
