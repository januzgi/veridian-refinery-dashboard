import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineDetail } from './machine-detail';

describe('MachineDetail', () => {
  let component: MachineDetail;
  let fixture: ComponentFixture<MachineDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachineDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
