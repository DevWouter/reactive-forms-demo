import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CreateSkillFormData, SkillFormData } from '../Hero';
import { CommonModule } from '@angular/common';
import { SkillEditComponent } from '../skill-edit/skill-edit.component';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [CommonModule, SkillEditComponent],
  template: `
    <div *ngFor="let skill of skills.controls; let i = index">
      <app-skill-edit [skill]="skill" (delete)="onDelete(i)"></app-skill-edit>
    </div>

    <button (click)="addSkill()">Create new skill</button>
  `,
  styles: ``
})
export class SkillListComponent {
  @Input() skills: FormArray<FormGroup<SkillFormData>> = new FormArray<FormGroup<SkillFormData>>([]);

  addSkill() {
    this.skills.push(new FormGroup<SkillFormData>(CreateSkillFormData()));
  }

  onDelete(index: number) {
    this.skills.removeAt(index);
  }
}
