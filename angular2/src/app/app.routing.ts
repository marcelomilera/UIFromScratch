import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'books', component: BooksComponent, canActivate: [AuthGuard] },
  { path: 'books/:searchText', component: BooksComponent },
  { path: 'signin', component: SigninComponent }
];

export const routing = RouterModule.forRoot(routes);
