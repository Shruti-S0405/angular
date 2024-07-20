import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MemberContactComponent } from './member-contact/member-contact.component';
import { IUserData } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HttpClientModule, MemberContactComponent],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-api-connection';
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
