import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  username: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  message: any = {};

  constructor(private UsersService: UsersService) { }

  submitFrom() {
    const data = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    }

    this.UsersService.addUser(data).subscribe(data => {
      this.message = [{ severity: 'success', summary: 'Product added successfuly'}];
      console.log(data);
    })

    this.username = "";
    this.firstName = "";
    this.lastName = "";
    this.email = "";
  }
}
