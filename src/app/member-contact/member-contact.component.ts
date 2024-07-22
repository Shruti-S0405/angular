import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-member-contact',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
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
