import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectorComponent } from './inspector/inspector.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';

const routes: Routes = [
  {path: 'inspector', component: InspectorComponent, title: 'Field Inspector'},
  {path: 'coordinator', component: CoordinatorComponent, title: 'Coordinator'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
