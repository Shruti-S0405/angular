import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { IUserData } from '../../data.service';

interface IUserDataInput {
  [key: string]: string;
}

@Component({
  selector: 'app-fields',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [DataService],
  templateUrl: './fields.component.html',
  styleUrl: './fields.component.css'
})
export class FieldsComponent {
  users: IUserData[] = [];
  users_input: IUserDataInput[] = [];

  constructor(private dataService: DataService){
      this.dataService.getUsers().subscribe(
        (users) => {
          this.users = users as IUserData[];

          this.users.forEach((user) => {
            this.users_input[user.id] = {
              name: user.name,
              email: user.email,
              phone: user.phone,
              address_street: user.address.street,
              address_suite: user.address.suite,
              address_city: user.address.city,
              address_zipcode: user.address.zipcode,
              address_geo_lat: user.address.geo.lat,
              address_geo_lng: user.address.geo.lng,
              company_name: user.company.name,
              company_catchPhrase: user.company.catchPhrase,
              company_bs: user.company.bs
            }
          });
      },
      () => {}
    );
  }
}
