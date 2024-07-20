import { Component } from '@angular/core';
import { DataService, IUserData } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FieldsComponent } from './fields/fields.component';
// import { IUserData } from '../data.service';

@Component({
  selector: 'app-member-contact',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FieldsComponent],
  providers: [DataService],
  templateUrl: './member-contact.component.html',
  styleUrl: './member-contact.component.css'
})
export class MemberContactComponent {
  users: IUserData[] = [];

  constructor(private dataService: DataService){
      this.dataService.getUsers().subscribe(
        (users: any) => {
          this.users = users;
      },
      () => {}
    );
  }
}
