import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

export interface HeroFormData {
    name: FormControl<string>;
    skills: FormArray<FormGroup<SkillFormData>>;
}

export interface SkillFormData {
    name: FormControl<string>;
    cost: FormControl<number>;
}

export function CreateHeroFormData(): HeroFormData {
    return {
        name: new FormControl('', { nonNullable: true, validators: [Validators.minLength(3), Validators.required] }),
        skills: new FormArray<FormGroup<SkillFormData>>([])
    };
}

export function CreateSkillFormData(): SkillFormData {
    return {
        name: new FormControl('', { nonNullable: true, validators: [Validators.minLength(3), Validators.required] }),
        cost: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required, Validators.min(0), Validators.max(100)] })
    };
}