import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page19',
  templateUrl: './page19.page.html',
  styleUrls: ['./page19.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class Page19Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
