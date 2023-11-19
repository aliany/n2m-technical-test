import { Component } from '@angular/core';
import { Superhero } from '../../interfaces/superheros.interface';
import { SuperherosService } from '../../services/superheros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.scss']
})
export class SuperheroComponent {

  superhero!: Superhero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SuperherosService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.service.getHeroePorId(id)))
    .subscribe( heroe => this.superhero = heroe);
  }

  regresar(){
    this.router.navigate(['superheros/listado'])
  }

}
