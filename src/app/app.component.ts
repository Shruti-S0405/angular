import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MemberContactComponent } from './member-contact/member-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HttpClientModule, MemberContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {}
