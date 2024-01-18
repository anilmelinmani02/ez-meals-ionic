import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class Page5Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
