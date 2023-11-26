import { SuperheroComponent } from './pages/superhero/superhero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListSuperherosComponent } from './pages/list-superheros/list-superheros.component';
import { AddSuperheroComponent } from './pages/add-superhero/add-superhero.component';
import { SearchSuperheroComponent } from './pages/search-superhero/search-superhero.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'listado',
      },
      {
        path: 'listado',
        component: ListSuperherosComponent,
      },
      {
        path: ':id',
        component: SuperheroComponent,
      },
      {
        path: 'agregar',
        component: AddSuperheroComponent,
      },
      {
        path: 'buscar',
        component: SearchSuperheroComponent,
      },
      {
        path: '**',
        component: ListSuperherosComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class SuperherosRoutingModule { }
