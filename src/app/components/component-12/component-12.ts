import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api-service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
     selector: 'app-component-12',
     imports: [CommonModule, FormsModule, ReactiveFormsModule],
     templateUrl: './component-12.html',
     styleUrl: './component-12.scss'
})
export class Component12 implements OnInit {
     public userNameForm: FormGroup = new FormGroup({});
     public searchData: any;
     public userDetails: any;

     constructor(
          private _apiService: ApiService,
          private _formBuilder: FormBuilder
     ) { }

     ngOnInit(): void {
          this.initForm();
     }

     public initForm() {
          this.userNameForm = this._formBuilder.group({
               userName: new FormControl('')
          })
     }

     public submit() {
          if (this.userNameForm.valid) {
               let fData = this.userNameForm.getRawValue();
               this.searchData = fData.userName.trim().replace(/\s+/g, '').toLowerCase();
          }
          return new Promise((resolve, reject) => {
               this._apiService.fetchGithubUserDetails(this.searchData).subscribe({
                    next: ((res) => {
                         if (res) {
                              this.userDetails = res;
                              this.userNameForm.reset();
                              resolve(res);
                         }
                    }),
                    error: ((error) => {
                         console.error(error);
                         reject(error);
                    })
               })
          })
     }
}
