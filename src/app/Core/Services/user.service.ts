import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable(/*{
  providedIn: 'root'
}*/)

export class UserService {

  constructor(private http: HttpClient) { }

  URL = "http://http://localhost:4200/users"

  getAllUsers() {
    return this.http.get<User[]>(this.URL);
  }
  getUserById(id: number) { }
  addUser(user: User) { return this.http.post(this.URL + "/add", user) }
  updateUser(u: User) { }
  deleteUser(id: number) { }

}
