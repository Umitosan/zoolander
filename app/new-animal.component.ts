import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <div *ngIf="newAnimalFormClicked">
      <h3>Animal Ingest:</h3>
      <div>
        <label>Species:</label> <input #newSpecies><br>
        <label>Name:</label> <input #newName><br>
        <label>Age:</label> <input #newAge><br>
        <label>Diet:</label> <input #newDiet><br>
        <label>Location:</label> <input #newLocation><br>
        <label>Caretakers required:</label> <input #newCaretakers><br>
        <label>Sex:</label> <input #newSex><br>
        <label>Likes:</label> <input #newLikes><br>
        <label>Dislikes:</label> <input #newDislikes><br>
        <label>ImageURL:</label> <input #newURL><br>

        <button class="btn btn-success btn-sm" (click)="doneWithNewAnimalFormClicked()" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value, newURL.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''; newURL.value=''; ">Save new animal</button>
      </div>
    </div>
  `
})

export class NewAnimalComponent {
  @Input() newAnimalFormClicked: boolean;
  @Output() newAnimalSender = new EventEmitter();
  @Output() doneWithNewAnimalFormClickedSender = new EventEmitter();

  submitForm(species: string, name: string, age: number,diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string, imageurl: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes, imageurl);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  doneWithNewAnimalFormClicked() {
    this.doneWithNewAnimalFormClickedSender.emit();
  }

}
