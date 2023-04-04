import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users: any[] = [];
  searchQuery = "";
  genders: any[] = [];
  selectedGender:  any = {};

  @Output() user = new EventEmitter<number>();

  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {
    this.UsersService.limitAndSkipUsers('100', '', '').subscribe((data: any) => {
      this.users = data['users'];
    });

    this.genders = [
      { gender: "male" },
      { gender: "female" }
    ]
  }

  showUser(userId: number) {
    this.user.emit(userId);
  }

  search() {
    this.UsersService.searchUsers(this.searchQuery).subscribe((data: any) => {
      this.users = data['users'];
    });
  }

  refresh(event: any) {
    this.UsersService.filterUsers(this.selectedGender).subscribe((data: any) => {
      //console.log(this.selectedGender.gender);
      this.users = data['users'];
    });
  }

}
