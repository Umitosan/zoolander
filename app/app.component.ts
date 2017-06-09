import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h4> (main app.component.ts) </h4>
    <div class="row">
      <button class="btn btn-info btn-sm" (click)="showNewAnimalForm()">New animal</button>
      <new-animal [newAnimalFormClicked]="newAnimalClicked" (newAnimalSender)="addAnimal($event)" (doneWithNewAnimalFormClickedSender)="hideNewAnimalForm($event)"></new-animal>
    </div>
    <hr>
    <div class="row">
      <h4> (animal-list.component.ts) </h4>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender1)="editAnimal($event)"></animal-list>
    </div>
    <hr>
    <div class="row">
      <h4> (edit-animal.component.ts) </h4>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneEditingButtonClickedSender)="finishedEditing()"></edit-animal>
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
