import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MemberContactComponent } from './member-contact/member-contact.component';
import { environment } from '../environments/environment.development';


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
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HttpClientModule, MemberContactComponent],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  // title = 'angular-api-connection';
  // users: User[] = [];

  // x:string = environment.apiUrl + '/users';

  // constructor(private dataService: DataService){
  //     this.dataService.get(this.x).subscribe(
  //       (users : any) => {
  //         this.users = users as User[];
  //     },
  //     () => {}
  //   );
  // }
}
