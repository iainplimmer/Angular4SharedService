import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskitemComponent } from './taskitem.component';

describe('TaskitemComponent', () => {
  let component: TaskitemComponent;
  let fixture: ComponentFixture<TaskitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
