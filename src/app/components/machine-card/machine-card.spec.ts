import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineCard } from './machine-card';

describe('MachineCard', () => {
  let component: MachineCard;
  let fixture: ComponentFixture<MachineCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachineCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
