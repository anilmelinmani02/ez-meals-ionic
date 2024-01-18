import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page12',
  templateUrl: './page12.page.html',
  styleUrls: ['./page12.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class Page12Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
