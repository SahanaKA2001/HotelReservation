import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookroomComponent } from './list-bookroom.component';

describe('ListBookroomComponent', () => {
  let component: BookroomComponent;
  let fixture: ComponentFixture<BookroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookroomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});