import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCloseSidenav() {
    this.sidenavClose.emit();
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
    this.onCloseSidenav();
  }
}
