import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateSkillFormData, SkillFormData } from '../Hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div [formGroup]="skill">
      <label>Skill name: <input type="text" formControlName="name" /></label>
      <label>Cost: <input type="number" formControlName="cost" /></label>
      <button (click)="delete.emit()">Delete</button>
    </div>

    <div *ngIf="name.invalid">
      <div *ngIf="name.errors?.['required']">Name is required.</div>
      <div *ngIf="name.errors?.['minlength']">Name must be at least 3 characters long.</div>
    </div>
    <div *ngIf="cost.invalid">
      <div *ngIf="cost.errors?.['required']">Cost is required.</div>
      <div *ngIf="cost.errors?.['min']">Value must be positive.</div>
      <div *ngIf="cost.errors?.['max']">Value must be less than 100.</div>
    </div>
  `,
  styles: ``
})
export class SkillEditComponent {
  @Output() delete = new EventEmitter<void>();
  @Input() skill: FormGroup<SkillFormData> = new FormGroup<SkillFormData>(CreateSkillFormData());
  get name() { return this.skill.get('name') as FormControl; }
  get cost() { return this.skill.get('cost') as FormControl; }
}
