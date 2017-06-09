import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <button class="btn btn-info btn-sm" (click)="showNewAnimalForm()">New animal</button>
      <new-animal [newAnimalFormClicked]="newAnimalClicked" (newAnimalSender)="addAnimal($event)" (doneWithNewAnimalFormClickedSender)="hideNewAnimalForm($event)"></new-animal>
    <div id="animaList" class="row">
      <animal-list [childAnimalList]="masterAnimalList" (clickSender1)="editAnimal($event)"></animal-list>
    </div>
    <div class="row">
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneEditingButtonClickedSender)="finishedEditing()"></edit-animal>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [ new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
                                 new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
                                 new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises"),
                                 new Animal("Warthog", "Teacup", 1, "Omnivore", "Savanna", 3, "Female", "Yucca Root", "little kids"),
                                 new Animal("Capybara", "Brusier", 6, "Herbivore", "Tropical Rain Forest Building", 6, "Male", "Soaking in the pool", "Jaguars"),
                                 new Animal("Andean hairy armadillo", "Tank Girl", 2, "Omnivore", "Southern plains", 1, "Female", "Fresh live grubs", "Earthquakes"),
                                 new Animal("Sea Otter", "Ozzy", 4, "Carnivore", "Aquarium", 1, "Female", "Sea Urchin", "Sea Lions"),
                                 new Animal("Red Panda", "Mr Hops", 4, "Herbivore", "Bamboo Grove", 3, "Male", "Mulberry Leaves", "Hard to reach places")
                               ];
  selectedAnimal: null;
  newAnimalClicked: boolean = false;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  showNewAnimalForm() {
    this.newAnimalClicked = true;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  hideNewAnimalForm() {
    this.newAnimalClicked = false;
  }


}
