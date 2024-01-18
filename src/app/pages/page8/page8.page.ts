import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.page.html',
  styleUrls: ['./page8.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class Page8Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
