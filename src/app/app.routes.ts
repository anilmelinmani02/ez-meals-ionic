import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'page1',
    loadComponent: () => import('./pages/page1/page1.page').then( m => m.Page1Page)
  },
  {
    path: 'page2',
    loadComponent: () => import('./pages/page2/page2.page').then( m => m.Page2Page)
  },
  {
    path: 'page3',
    loadComponent: () => import('./pages/page3/page3.page').then( m => m.Page3Page)
  },
  {
    path: 'page4',
    loadComponent: () => import('./pages/page4/page4.page').then( m => m.Page4Page)
  },
  {
    path: 'page5',
    loadComponent: () => import('./pages/page5/page5.page').then( m => m.Page5Page)
  },
  {
    path: 'page6',
    loadComponent: () => import('./pages/page6/page6.page').then( m => m.Page6Page)
  },
  {
    path: 'page7',
    loadComponent: () => import('./pages/page7/page7.page').then( m => m.Page7Page)
  },
  {
    path: 'page8',
    loadComponent: () => import('./pages/page8/page8.page').then( m => m.Page8Page)
  },
  {
    path: 'page9',
    loadComponent: () => import('./pages/page9/page9.page').then( m => m.Page9Page)
  },
  {
    path: 'page10',
    loadComponent: () => import('./pages/page10/page10.page').then( m => m.Page10Page)
  },
  {
    path: 'page11',
    loadComponent: () => import('./pages/page11/page11.page').then( m => m.Page11Page)
  },
  {
    path: 'page12',
    loadComponent: () => import('./pages/page12/page12.page').then( m => m.Page12Page)
  },
  {
    path: 'page13',
    loadComponent: () => import('./pages/page13/page13.page').then( m => m.Page13Page)
  },
  {
    path: 'page14',
    loadComponent: () => import('./pages/page14/page14.page').then( m => m.Page14Page)
  },
  {
    path: 'page15',
    loadComponent: () => import('./pages/page15/page15.page').then( m => m.Page15Page)
  },
  {
    path: 'page16',
    loadComponent: () => import('./pages/page16/page16.page').then( m => m.Page16Page)
  },
  {
    path: 'page17',
    loadComponent: () => import('./pages/page17/page17.page').then( m => m.Page17Page)
  },
  {
    path: 'page18',
    loadComponent: () => import('./pages/page18/page18.page').then( m => m.Page18Page)
  },
  {
    path: 'page19',
    loadComponent: () => import('./pages/page19/page19.page').then( m => m.Page19Page)
  },
  {
    path: 'page20',
    loadComponent: () => import('./pages/page20/page20.page').then( m => m.Page20Page)
  },
  {
    path: 'page21',
    loadComponent: () => import('./pages/page21/page21.page').then( m => m.Page21Page)
  },
  {
    path: 'page22',
    loadComponent: () => import('./pages/page22/page22.page').then( m => m.Page22Page)
  },
  {
    path: 'page23',
    loadComponent: () => import('./pages/page23/page23.page').then( m => m.Page23Page)
  },
  {
    path: 'page24',
    loadComponent: () => import('./pages/page24/page24.page').then( m => m.Page24Page)
  },
  {
    path: 'page25',
    loadComponent: () => import('./pages/page25/page25.page').then( m => m.Page25Page)
  },
  {
    path: 'page26',
    loadComponent: () => import('./pages/page26/page26.page').then( m => m.Page26Page)
  },
  {
    path: 'page27',
    loadComponent: () => import('./pages/page27/page27.page').then( m => m.Page27Page)
  },
  {
    path: 'page28',
    loadComponent: () => import('./pages/page28/page28.page').then( m => m.Page28Page)
  },
]