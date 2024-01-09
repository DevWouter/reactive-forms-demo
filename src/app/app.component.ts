import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, HeroListComponent, HeroEditComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <app-hero-list></app-hero-list>
  `,
  styles: [],
})
export class AppComponent {
  title = 'specialx';
}
