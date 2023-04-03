import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users: any[] = [];

  @Output() user = new EventEmitter<number>();

  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {
    this.UsersService.getUsersList().subscribe(data => {
      this.users = data['users'];
      console.log(this.users[0]);
    });
  }

  showUser(userId: number) {
    this.user.emit(userId);
  }
}
