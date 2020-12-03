import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTextboxComponent } from './comp-textbox.component';

describe('CompTextboxComponent', () => {
  let component: CompTextboxComponent;
  let fixture: ComponentFixture<CompTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
