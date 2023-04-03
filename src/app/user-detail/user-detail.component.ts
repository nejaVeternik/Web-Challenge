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

  constructor(private route: ActivatedRoute, private UsersService: UsersService) {
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
