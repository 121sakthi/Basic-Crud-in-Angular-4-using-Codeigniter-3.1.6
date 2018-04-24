import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import * as _ from 'underscore';
import { PagerService } from './_services/index'

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class UsersComponent implements OnInit {
  users: User[];

  constructor(private router: Router,
              private userService: UserService,
              private pagerService: PagerService) {
  }


// array of all items to be paged
    private allItems: any[];

    // pager object
    pager: any = {};

     // paged items
    pagedItems: any[];

  /**
   * Gets the existing users
   */
  getUsers(): void {
    this.userService.getUsers()
      .then(users => {
        //this.users = users;
        this.allItems = users;
        this.setPage(1);
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  update(id: string): void {
    this.router.navigate(['/update', id]);
  }

  remove(id: string): void {
    this.userService.remove(id)
      .then(() => {
        this.getUsers();
      });
  }

  viewDetail(id: string): void {
    this.router.navigate(['/detail', id]);
  }
  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
