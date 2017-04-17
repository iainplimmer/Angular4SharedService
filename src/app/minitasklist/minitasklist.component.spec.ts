import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitasklistComponent } from './minitasklist.component';

describe('MinitasklistComponent', () => {
  let component: MinitasklistComponent;
  let fixture: ComponentFixture<MinitasklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinitasklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinitasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
