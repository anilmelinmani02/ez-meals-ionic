import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page9',
  templateUrl: './page9.page.html',
  styleUrls: ['./page9.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class Page9Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
