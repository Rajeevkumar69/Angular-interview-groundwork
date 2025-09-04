import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
     selector: 'app-component-2',
     imports: [CommonModule, ReactiveFormsModule, FormsModule],
     templateUrl: './component-2.html',
     styleUrl: './component-2.scss',
     standalone:true
})
export class Component2 implements OnInit {
     public userForm: FormGroup = new FormGroup({});

     constructor(
          private formBuilder: FormBuilder
     ) { }

     ngOnInit(): void {
          this.initUserForm();
     }

     public initUserForm() {
          this.userForm = this.formBuilder.group({
               name: new FormControl('', [Validators.required]),
               email: new FormControl('', [Validators.required])
          })
     }

     public submitForm() {
          if (this.userForm.valid) {
               let formData = this.userForm.getRawValue();
               console.log(formData);
          } else {
               console.error(`Error submittin form`);
          }
     }

}
