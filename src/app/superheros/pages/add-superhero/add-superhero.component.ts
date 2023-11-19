import { Component, OnInit } from '@angular/core';
import { Publisher, Superhero } from '../../interfaces/superheros.interface';
import { SuperherosService } from '../../services/superheros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-add-superhero',
  templateUrl: './add-superhero.component.html',
  styleUrls: ['./add-superhero.component.scss']
})
export class AddSuperheroComponent implements OnInit{

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
  ]

  superhero: Superhero = {
    id: '',
    superhero: '',
    alter_ego: '',
    publisher: Publisher.DCComics,
    first_appearance: '',
    characters: '',
    alt_img: ''
  }


  constructor(private service: SuperherosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.service.getHeroById(id))
      ).subscribe(heroe => this.superhero = heroe);
  }

  guardar() {
    if (this.superhero.superhero.trim().length === 0) {
      return;
    }
    if (this.superhero.id) {
      this.service.actualizarHeroe(this.superhero)
        .subscribe(superhero => {
          console.log('Actualizando', superhero);
          this.mostrarSnakbar('Registro actualizado');
        })
    } else {
      this.service.agregarHeroe(this.superhero)
        .subscribe(superhero => {
          this.router.navigate(['/superheros/editar', superhero.id]);
          this.mostrarSnakbar('Registro creado correctamente');
        })
    }
  }

  eliminarHeroe() {

  }

  mostrarSnakbar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 2500
    })
  }
}
