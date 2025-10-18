import { Component } from '@angular/core';
import { MachineData } from '../../services/machine-data';
import { Machine } from '../../models/machine.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard-view',
  standalone: false,
  templateUrl: './dashboard-view.html',
  styleUrls: ['./dashboard-view.scss'],
})
export class DashboardView {
  machines: Machine[] = [];
  machines$!: Observable<Machine[]>;
  powerAlertThreshold = 100; // A property to hold the current threshold

  settingsForm: FormGroup;

  // Inject the MachineData (service) and the FormBuilder (fb)
  constructor(private machineService: MachineData, private fb: FormBuilder) {
    // Create the form group using FormBuilder
    this.settingsForm = this.fb.group({
      // This creates a form group with one control named 'alertThreshold'
      // The initial value is 100.
      alertThreshold: [100],
    });
  }

  ngOnInit(): void {
    this.machines = this.machineService.getMachines();
    this.machines$ = this.machineService.getLiveMachineUpdates();

    // Listen for changes to the form's value
    this.settingsForm.get('alertThreshold')?.valueChanges.subscribe((value) => {
      // When the user types in the input, this code runs
      this.powerAlertThreshold = value || 100;
    });
  }
}
