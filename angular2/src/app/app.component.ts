import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';

import  {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/jcyovera/UIFromScratch';
  title: string;
  searchText: string;
  
  constructor(
  	private api: ApiService,
  	private router: Router,
  	private route: ActivatedRoute
  ) {
    this.title = this.api.title;    
  }

  onSearch(){
    //Si se encuentra en la ruta '/books'
    if (this.router.url.includes('/books'))
      //Verificar que el texto exista
    	if (this.searchText && this.searchText.trim())
        //Ir a '/books/', pasándole el texto como parámetro a la ruta
        this.router.navigate(['books',this.searchText.trim()],{relativeTo:this.route});
      else{
        this.router.navigate(['books'],{relativeTo:this.route});
        this.searchText = '';
      }
  }

  onLogOut(){
    localStorage.removeItem('signedIn');
  }
}
