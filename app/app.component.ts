import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({  // 'decorator'
  selector: 'app-root',
  template: `
  <div class="container">
    <h4> (main app.component.ts) </h4>

    <div class="row">
      <h4> (animal-list.component.ts) </h4>
      <animal-list [childAnimalList]="masterAnimalList"></animal-list>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [ new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
                                 new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
                                 new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises"),
                                 new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
                                 new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
                                 new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises")
                               ];
  selectedAnimal: null;

}
