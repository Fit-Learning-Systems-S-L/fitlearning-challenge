import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODO: Implementar las rutas necesarias
const routes: Routes = [
  { path: '**', redirectTo: '/users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
