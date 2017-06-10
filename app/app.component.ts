import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <new-animal [newAnimalFormClicked]="newAnimalClicked" (newAnimalSender)="addAnimal($event)" (doneWithNewAnimalFormClickedSender)="hideNewAnimalForm($event)"></new-animal>
    <div id="animaList" class="row">
      <animal-list [childAnimalList]="masterAnimalList" (clickSender1)="editAnimal($event)" (clickSender2)="showNewAnimalForm($event)"></animal-list>
    </div>
    <div class="row">
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneEditingButtonClickedSender)="finishedEditing()"></edit-animal>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [ new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises", "https://s-media-cache-ak0.pinimg.com/originals/f5/fa/1e/f5fa1e03f37336f4610469dba57602ee.jpg"),
                                 new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based", "http://www.zoonewengland.org/media/72140/ocelot_gallery.jpg"),
                                 new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises", "https://c2.staticflickr.com/8/7126/7762353696_e2478ef1f2_b.jpg"),
                                 new Animal("Warthog", "Teacup", 1, "Omnivore", "Savanna", 3, "Female", "Yucca Root", "little kids", "https://az616578.vo.msecnd.net/files/2016/08/19/636072105835803039-1239810228_warthog_01.jpg"),
                                 new Animal("Capybara", "Brusier", 6, "Herbivore", "Tropical Rain Forest Building", 6, "Male", "Soaking in the pool", "Jaguars", "http://zoo.sandiegozoo.org/sites/default/files/animal_hero/capybara_0.jpg"),
                                 new Animal("Andean hairy armadillo", "Tank Girl", 2, "Omnivore", "Southern plains", 1, "Female", "Fresh live grubs", "Earthquakes", "http://www.factzoo.com/sites/all/img/mammals/armadillos/large-hairy-armadillo.jpg"),
                                 new Animal("Sea Otter", "Ozzy", 4, "Carnivore", "Aquarium", 1, "Female", "Sea Urchin", "Sea Lions", "https://yellingwithpictures.files.wordpress.com/2017/02/628x353-otter-cu-yawn.jpg?w=480&h=270"),
                                 new Animal("Red Panda", "Mr Hops", 4, "Herbivore", "Bamboo Grove", 3, "Male", "Mulberry Leaves", "Hard to reach places", "https://media.mnn.com/assets/images/2017/04/Red-Panda-Standing-Enclosure.jpg.638x0_q80_crop-smart.jpg")
                               ];
  selectedAnimal: null;
  newAnimalClicked: boolean = false;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  showNewAnimalForm() {
    this.newAnimalClicked = true;
  }

  hideNewAnimalForm() {
    this.newAnimalClicked = false;
  }

}
