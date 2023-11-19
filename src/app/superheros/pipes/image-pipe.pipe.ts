import { Pipe, PipeTransform } from '@angular/core';
import { Superhero } from '../interfaces/superheros.interface';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {

  transform(superhero: Superhero): string {
    if ( !superhero.id && !superhero.alt_img) {
      return 'assets/no-image.png';
    } else if ( superhero.alt_img ) {
      return superhero.alt_img;
    } else {
      return `assets/superheros/${superhero.id}.jpg`;
    }
  }

}
