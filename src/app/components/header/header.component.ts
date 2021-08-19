import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string = '';
  user: User = new User()

  constructor(
    private userService: userService
  ) { }

  ngOnInit() {
    this.getUserData()
  }

  getUserData() {
    this.userService.getUserInfo(1).subscribe(res => {      
      this.user = res[0]
    })
  }

}
