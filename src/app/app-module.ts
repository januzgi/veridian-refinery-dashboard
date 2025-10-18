import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing-module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { App } from './app';
import { DashboardView } from './components/dashboard-view/dashboard-view';
import { MachineDetail } from './pages/machine-detail/machine-detail';

@NgModule({
  declarations: [App, DashboardView, MachineDetail],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
