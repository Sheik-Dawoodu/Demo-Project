import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from './modules/auth/login/login.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet,LoginComponent]
})
export class AppComponent implements OnInit {
  title = 'standalone';

  ngOnInit(): void {
    initFlowbite()
  }
}
