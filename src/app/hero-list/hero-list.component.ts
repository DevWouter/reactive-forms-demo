import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { HeroEditComponent } from '../hero-edit/hero-edit.component';
import { CommonModule } from '@angular/common';
import { CreateHeroFormData, HeroFormData, SkillFormData } from '../Hero';
@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule, HeroEditComponent],
  template: `
    <div *ngFor="let hero of heroes.controls; let i = index">
      <app-hero-edit [hero]="hero" (delete)="onDelete(i)"></app-hero-edit>
      <hr />
    </div>
    <button (click)="createNewHero()">Create new hero</button>

    <pre>{{this.heroes.status | json}}</pre>

    <pre>{{heroes.value | json}}</pre>
  `,
  styles: ``
})
export class HeroListComponent {

  heroes = new FormArray<FormGroup<HeroFormData>>([]);

  createNewHero() {
    this.heroes.push(new FormGroup<HeroFormData>(CreateHeroFormData()));
  }

  onDelete(index: number) {
    this.heroes.removeAt(index);
  }
}
