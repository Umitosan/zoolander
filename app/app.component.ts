import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({  // 'decorator'
  selector: 'app-root',
  template: `
  <div class="container">
    <h3> component </h3>
  </div>
  `
})

export class AppComponent {
}
