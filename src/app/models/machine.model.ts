export interface Machine {
  id: number;
  name: string;
  type: 'Pulper' | 'Debarker' | 'Chipper';
  status: 'Online' | 'Offline' | 'Warning';
  powerUsage: number; // in kWh
  waterUsage: number; // in m³
}
