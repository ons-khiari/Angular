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

  add(F: NgForm) {
    const user: User = {
      "idCustomer": 6,
      "firstName": F.controls['fn'].value,
      "lastName": F.controls['ln'].value,
      "birthDate": F.controls['birthdate'].value,
      "accountCategory": "Customer",
      "email": F.controls['email'].value,
      "password": F.controls['password'].value,
      "picture": "https://bootdey.com/img/Content/avatar/avatar5.png",
      "profession": F.controls['profession'].value
    }

    this.userS.addUser(user).subscribe(() => { });
    console.log(F);
  }

}