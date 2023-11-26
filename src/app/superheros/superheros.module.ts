import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material/material.module';
import { SuperherosRoutingModule } from './superheros-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListSuperherosComponent } from './pages/list-superheros/list-superheros.component';
import { SuperheroCardComponent } from './component/superhero-card/superhero-card.component';
import { ImagePipePipe } from './pipes/image-pipe.pipe';
import { SuperheroComponent } from './pages/superhero/superhero.component';
import { AddSuperheroComponent } from './pages/add-superhero/add-superhero.component';
import { SearchSuperheroComponent } from './pages/search-superhero/search-superhero.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListSuperherosComponent,
    SuperheroCardComponent,
    ImagePipePipe,
    SuperheroComponent,
    AddSuperheroComponent,
    SearchSuperheroComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    SuperherosRoutingModule,
    MaterialModule,
  ],
})
export class SuperherosModule { }
