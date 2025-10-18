import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardView } from './components/dashboard-view/dashboard-view';
import { MachineDetail } from './pages/machine-detail/machine-detail';

const routes: Routes = [
  { path: 'dashboard', component: DashboardView },
  { path: 'machine/:id', component: MachineDetail },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
