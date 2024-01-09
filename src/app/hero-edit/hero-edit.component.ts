import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateHeroFormData, HeroFormData, SkillFormData } from '../Hero';
import { SkillListComponent } from '../skill-list/skill-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SkillListComponent],
  template: `
    <div [formGroup]='hero'>
      <label>Name
      <input type="text" formControlName="name" />
      </label>

      <div *ngIf="name.invalid">
        <div *ngIf="name.errors?.['required']">Name is required.</div>
        <div *ngIf="name.errors?.['minlength']">Name must be at least 3 characters long.</div>
      </div>

      <button (click)="delete.emit()">Delete</button>
      <div>
       <app-skill-list [skills]="hero.controls.skills"></app-skill-list>
      </div>
    </div>
  `,
  styles: ``
})
export class HeroEditComponent {
  @Output() delete = new EventEmitter<void>();
  @Input() hero: FormGroup<HeroFormData> = new FormGroup<HeroFormData>(CreateHeroFormData());

  get name() {
    return this.hero.get('name') as FormControl;
  }
}
