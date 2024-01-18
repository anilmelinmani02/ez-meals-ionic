import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.page.html',
  styleUrls: ['./page7.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class Page7Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
