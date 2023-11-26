import { Component, OnInit } from '@angular/core';
import { Superhero } from '../../interfaces/superheros.interface';
import { SuperherosService } from '../../services/superheros.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-superhero',
  templateUrl: './search-superhero.component.html',
  styleUrls: ['./search-superhero.component.scss']
})
export class SearchSuperheroComponent implements OnInit {
  termino: string = '';
  listOfSuperheroes: Superhero[] = [];
  selectedSuperhero: Superhero | undefined;

  constructor( private service: SuperherosService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.service.getSugerencias(this.termino.trim())
        .subscribe( superheros => this.listOfSuperheroes = superheros);
  }

  opcionSelecionada(event: MatAutocompleteSelectedEvent ){
    if (!event.option.value){
      this.selectedSuperhero = undefined;
      return;
    }
    const heroe: Superhero = event.option.value;
    this.termino = heroe.superhero;
    this.service.getHeroById(heroe.id!)
        .subscribe( heroe => this.selectedSuperhero = heroe);
  }
}
