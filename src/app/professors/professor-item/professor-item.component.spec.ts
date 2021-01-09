import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorItemComponent } from './professor-item.component';

describe('ProfessorItemComponent', () => {
  let component: ProfessorItemComponent;
  let fixture: ComponentFixture<ProfessorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
