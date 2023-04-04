import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  userId: any = '';
  user: any = {};
  images: string[] = [];
  address: any = {}
  username: string = '';
  editing: boolean = false;
  messageShowing: boolean = false;
  message: any = {};

  constructor(private route: ActivatedRoute, private UsersService: UsersService) {
  }

  edit() {
    this.editing = true;
    this.messageShowing = false;
  }

  confirm() {
    this.editing = false;
      const data = {
      username: this.username
  }

    this.UsersService.updateUser(data, this.userId).subscribe((data: any) => {
      console.log(data);
    });  

    this.messageShowing = true;
    this.message = [{ severity: 'success', summary: 'PUT request for updating sent successfuly'}];
  }


  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');

    this.UsersService.getUser(this.userId).subscribe((data: any) => {
      this.user = data;
      this.address = this.user.address;
      console.log(this.user);
    });
  }

}
