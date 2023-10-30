import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private Router: Router, private userS: UserService) { }

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

  add(F: NgForm) {
    console.log(F);
  }

}