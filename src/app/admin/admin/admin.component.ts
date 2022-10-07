import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private login: LoginComponent,private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.login.logout();
    this.router.navigateByUrl('/login');
  }

}
