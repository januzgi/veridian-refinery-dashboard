import { Component } from '@angular/core';
import { MachineData } from '../../services/machine-data';
import { Machine } from '../../models/machine.model';

@Component({
  selector: 'app-dashboard-view',
  standalone: false,
  templateUrl: './dashboard-view.html',
  styleUrls: ['./dashboard-view.scss'],
})
export class DashboardView {
  machines: Machine[] = [];

  constructor(private machineService: MachineData) {}
  ngOnInit(): void {
    this.machines = this.machineService.getMachines();
  }
}
