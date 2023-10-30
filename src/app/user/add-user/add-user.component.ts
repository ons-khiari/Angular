import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private userService: UserService) { }

  user: User = {
    "idCustomer": 6,
    "firstName": "",
    "lastName": "",
    "birthDate": "",
    "accountCategory": "Customer",
    "email": "",
    "password": "",
    "picture": "",
    "profession": ""
  }

  users: User[] = [];

  add(F: NgForm) {
    if (F.valid) {
      this.users.push({ ...this.user });
      this.resetForm();
    }
  }

  resetForm() {
    this.user = {
      "idCustomer": 6,
      "firstName": "",
      "lastName": "",
      "birthDate": "",
      "accountCategory": "Customer",
      "email": "",
      "password": "",
      "picture": "",
      "profession": ""
    };
  }
}