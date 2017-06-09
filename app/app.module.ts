// This is the ROOT MODULE of our app

import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { AppComponent }   from './app.component';
import { AnimalListComponent }  from './animal-list.component';

@NgModule({
  imports: [ BrowserModule,
             FormsModule ],
  declarations: [ AppComponent,
                   AnimalListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
