import { Injectable } from '@angular/core';
import { Machine } from '../models/machine.model';
import { Observable, interval, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MachineData {
  private machines: Machine[] = [
    {
      id: 1,
      name: 'Pulperizer 3000',
      type: 'Pulper',
      status: 'Online',
      powerUsage: 85.5,
      waterUsage: 50.2,
    },
    {
      id: 2,
      name: 'Debarkinator',
      type: 'Debarker',
      status: 'Offline',
      powerUsage: 0,
      waterUsage: 0,
    },
    {
      id: 3,
      name: 'Woodchipper XL',
      type: 'Chipper',
      status: 'Warning',
      powerUsage: 21.0,
      waterUsage: 15.5,
    },
    {
      id: 4,
      name: 'Pulperizer 5000',
      type: 'Pulper',
      status: 'Online',
      powerUsage: 92.1,
      waterUsage: 65.8,
    },
    {
      id: 5,
      name: 'Chipper Pro',
      type: 'Chipper',
      status: 'Online',
      powerUsage: 73.4,
      waterUsage: 10.1,
    },
  ];

  getMachines(): Machine[] {
    return this.machines;
  }

  getLiveMachineUpdates(): Observable<Machine[]> {
    return interval(2000).pipe(
      map(() => {
        // Return a new array where each machine has updated, random stats
        return this.machines.map((m) => ({
          ...m,
          powerUsage: parseFloat((Math.random() * 100).toFixed(2)),
          status: Math.random() > 0.9 ? 'Warning' : 'Online',
        }));
      })
    );
  }
}
