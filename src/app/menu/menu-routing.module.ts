import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MenuDashboardComponent,
    data: {
      title: 'Dashboard',
    },
    children: [
      {
        path: '',
        component: MenuDashboardComponent,
        data: {
          title: 'Dashboard',
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
