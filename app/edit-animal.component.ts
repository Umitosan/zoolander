import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'edit-animal',
  template: `
      <hr>
      <div class="col-sm-12">
        <div *ngIf="childSelectedAnimal">
          <h3>Edit Animal info</h3>

          <label>Species: </label>
          <input name="animalSpecies" [(ngModel)]="childSelectedAnimal.species"><br>
          <label>Name: </label>
          <input name="animalName" [(ngModel)]="childSelectedAnimal.name"><br>
          <label>Age: </label>
          <input name="animalAge" [(ngModel)]="childSelectedAnimal.age"><br>
          <label>Diet: </label>
          <input name="animalDiet" [(ngModel)]="childSelectedAnimal.diet"><br>
          <label>location: </label>
          <input name="animalLocation" [(ngModel)]="childSelectedAnimal.location"><br>
          <label>Caretakers required: </label>
          <input name="animalCaretakers" [(ngModel)]="childSelectedAnimal.caretakers"><br>
          <label>Sex: </label>
          <input name="animalSex" [(ngModel)]="childSelectedAnimal.sex"><br>
          <label>Likes: </label>
          <input name="animalLikes" [(ngModel)]="childSelectedAnimal.likes"><br>
          <label>Dislikes: </label>
          <input name="animalDislikes" [(ngModel)]="childSelectedAnimal.dislikes"><br>
          <label>ImageURL: </label>
          <input name="animalImage" [(ngModel)]="childSelectedAnimal.imageurl"><br>

          <button class="btn btn-success btn-sm" (click)="doneEditingButtonClicked()">Save changes</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneEditingButtonClickedSender = new EventEmitter();

  doneEditingButtonClicked() {
    this.doneEditingButtonClickedSender.emit();
  }

}
