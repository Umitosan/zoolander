import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';


@Pipe({
  name: "animals",
  pure: false
})


export class AnimalsPipe implements PipeTransform {

  transform(input: Animal[], userFilter) {
    var output: Animal[] = [];

    if (userFilter === "youngAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (userFilter === "matureAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (userFilter === "omnivores") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "Omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (userFilter === "herbivores") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "Herbivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (userFilter === "carnivores") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "Carnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
