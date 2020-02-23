import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonsHomeComponent } from './digimons-home.component';

describe('DigimonsHomeComponent', () => {
  let component: DigimonsHomeComponent;
  let fixture: ComponentFixture<DigimonsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigimonsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
