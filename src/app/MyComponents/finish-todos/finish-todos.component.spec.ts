import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishTodosComponent } from './finish-todos.component';

describe('FinishTodosComponent', () => {
  let component: FinishTodosComponent;
  let fixture: ComponentFixture<FinishTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
