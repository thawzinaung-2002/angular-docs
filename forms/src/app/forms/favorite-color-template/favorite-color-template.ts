import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForbiddenValidatorDirective } from '../../forbidden-name.directive';


export class Actor {
  constructor(
    public id: number,
    public name: string,
    public skill: string,
    public studio?: string,
  ){}
}

@Component({
  selector: 'app-favorite-color-template',
  imports: [FormsModule, JsonPipe, ForbiddenValidatorDirective],
  templateUrl: './favorite-color-template.html',
  styleUrl: './favorite-color-template.css',
})
export class FavoriteColorTemplate {
  favoriteColor = signal('');
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Crusise', this.skills[3], 'CW Productions');
  submitted = false;
  onSubmit() {
    this.submitted=true;
  }

  newActor() {
    this.model = new Actor(42, '', '');
  }
}
