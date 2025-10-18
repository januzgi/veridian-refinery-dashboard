import { Component, Input } from '@angular/core';
import { Machine } from '../../models/machine.model';

@Component({
  selector: 'app-machine-card',
  standalone: false,
  templateUrl: './machine-card.html',
  styleUrl: './machine-card.scss',
})
export class MachineCard {
  @Input() machine!: Machine;
  @Input() powerAlertThreshold!: number;
}
