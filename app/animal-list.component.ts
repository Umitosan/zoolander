import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
    <div class="row">
      <div class="col-sm-12">
        <div id="selects">
        <h3> Current resident animals: </h3>
          <p>Filter the list here using the dropdown </p>
          <select (change)="onChange($event.target.value)">
            <option value="allAnimals" selected="selected">All logged animals</option>
            <option value="youngAnimals">Young animals</option>
            <option value="matureAnimals">Mature animals</option>
            <option value="omnivores">Omnivores</option>
            <option value="herbivores">Herbivores</option>
            <option value="carnivores">Carnivores</option>
          </select>
        </div>
        <button class="btn btn-info btn-sm" (click)="newAnimalButtonClicked()">New animal</button>
      </div>

      <div *ngFor="let num of [0,1,2,3,4,5,6]">
        <div class="row">
          <div *ngFor="let currentAnimal of childAnimalList | animals:desiredFilter | slice:(num*4):(num*4+4) ; let i = index;" >
              <div class="col col-md-3" >
                <img [src]="currentAnimal.imageurl" alt="animal image" />
                <h5><b>Species:</b>  {{currentAnimal.species}}</h5>
                <h5><b>Name:</b> {{currentAnimal.name}}</h5>
                <h5><b>Age:</b> {{currentAnimal.age}}</h5>
                <h5><b>Diet:</b> {{currentAnimal.diet}}</h5>
                <h5><b>Location:</b> {{currentAnimal.location}}</h5>
                <h5><b>Caretakers required:</b> {{currentAnimal.caretakers}}</h5>
                <h5><b>Sex:</b> {{currentAnimal.sex}}</h5>
                <h5><b>Likes:</b> {{currentAnimal.likes}}</h5>
                <h5><b>Dislikes:</b> {{currentAnimal.dislikes}}</h5>
                <div id="animalListButtons">
                  <button class="btn btn-info btn-sm" (click)="editButtonHasBeenClicked(currentAnimal)">Edit Details</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender1 = new EventEmitter();
  @Output() clickSender2 = new EventEmitter();

  desiredFilter: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender1.emit(animalToEdit);
    console.log("edit animal clicked");
  }

  onChange(dropdownOption) {
    this.desiredFilter = dropdownOption;
  }

  newAnimalButtonClicked() {
    this.clickSender2.emit();
  }

}
