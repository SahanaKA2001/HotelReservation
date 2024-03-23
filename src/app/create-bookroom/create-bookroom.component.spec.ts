import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookroomComponent } from './create-bookroom.component';

describe('CreateBookroomComponent', () => {
  let component: CreateBookroomComponent;
  let fixture: ComponentFixture<CreateBookroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateBookroomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBookroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
