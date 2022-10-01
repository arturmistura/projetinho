import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { BaseModule } from '../views/base/base.module';
import { AccordionModule, CardModule, GridModule, TableModule } from '@coreui/angular';

@NgModule({
  declarations: [
    MenuDashboardComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    BaseModule,
    GridModule,
    CardModule,
    TableModule,
    AccordionModule
  ]
})
export class MenuModule {}
