import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  updateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.isAuthenticated()) {
      this.authService.userDetailFromToken();
      this.createUpdateForm();
      this.updateForm.patchValue({
        id: this.authService.userId,
        firstName: this.authService.firstName,
        lastName: this.authService.lastName,
        email: this.authService.email,
      });
    }
  }

  createUpdateForm() {
    this.updateForm = this.formBuilder.group({
      userId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  update() {
    if (this.updateForm.valid) {

      let updateModel = Object.assign({}, this.updateForm.value);
      this.authService.update(updateModel).subscribe(
        (response) => {
          this.toastrService.success('Güncelleme Başarılı');
        },
        (responseError) => {
          console.log(responseError);
          this.toastrService.error(responseError.error);
        }
      );
    }
  }

  isAuthenticated() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }
}