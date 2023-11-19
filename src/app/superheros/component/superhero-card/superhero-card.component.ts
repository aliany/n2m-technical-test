import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Superhero } from '../../interfaces/superheros.interface';

@Component({
  selector: 'app-superhero-card',
  templateUrl: './superhero-card.component.html',
  styleUrls: ['./superhero-card.component.scss']
})
export class SuperheroCardComponent implements OnInit, OnDestroy {
  @Input() superhero!: Superhero;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

}
