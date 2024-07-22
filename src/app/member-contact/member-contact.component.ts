import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from '../../environments/environment.development';

interface User {
  id: number;   
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  }
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

@Component({
  selector: 'app-member-contact',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ],
  providers: [DataService],
  templateUrl: './member-contact.component.html',
  styleUrl: './member-contact.component.css'
})
export class MemberContactComponent {
  users: User[] = [];

  x:string = environment.apiUrl + '/users';

  constructor(private dataService: DataService){
      this.dataService.get(this.x).subscribe(
        (users : any) => {
          this.users = users as User[];
      },
      () => {}
    );
  }
}
