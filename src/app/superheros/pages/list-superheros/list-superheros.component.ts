import { Superhero } from './../../interfaces/superheros.interface';
import { Component } from '@angular/core';
import { SuperherosService } from '../../services/superheros.service';

@Component({
  selector: 'app-list-superheros',
  templateUrl: './list-superheros.component.html',
  styleUrls: ['./list-superheros.component.scss']
})
export class ListSuperherosComponent {

  superheros: Superhero[] = [];

  constructor(private service: SuperherosService) { }

  ngOnInit(): void {
    this.service.getHeroe()
    .subscribe( arrayHeroes => this.superheros = arrayHeroes);
  }

}
