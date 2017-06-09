import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
    <div class="row">
      <div  *ngFor="let loopedAnimal of childAnimalList" >
        <div class="col-sm-4" >
        <h5>Species: {{loopedAnimal.species}}</h5>
          <h5>Name: {{loopedAnimal.name}}</h5>
          <h5>Age: {{loopedAnimal.age}}</h5>
          <h5>Diet: {{loopedAnimal.diet}}</h5>
          <h5>Location: {{loopedAnimal.location}}</h5>
          <h5>Caretakers required: {{loopedAnimal.caretakers}}</h5>
          <h5>Sex: {{loopedAnimal.sex}}</h5>
          <h5>Likes: {{loopedAnimal.likes}}</h5>
          <h5>Dislikes: {{loopedAnimal.dislikes}}</h5>
        </div>
      </div>
    </div>
  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];

}
