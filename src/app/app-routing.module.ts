import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'superheros',
    loadChildren: () => import('./superheros/superheros.module').then( modulo => modulo.SuperherosModule),
  },
  {
    path: '**',
    //component: ErrorPageComponent
    redirectTo: 'superheros'
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
