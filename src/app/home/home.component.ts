import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharacterCreationComponent } from '../character-creation/character-creation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  redirectCharacterCreation(): void {
    this.router.navigate(['/character/creation']);
  }

}
