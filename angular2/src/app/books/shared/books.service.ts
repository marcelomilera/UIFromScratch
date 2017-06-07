import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Books } from './books.model';
import { SortOptions } from './sortOptions.model';

@Injectable()
export class BooksService {

	constructor(private http: Http) { }

	getList(filters:any): Observable<Books[]> {
		let params = new URLSearchParams();
		params.set('_sort',String(filters.sortBy));
		params.set('_order','ASC');
		params.set('q',String(filters.searchText));

		return this.http.get('http://localhost:3000/books',{search:params}).map(res => res.json() as Books[]);
	}

	getSortOptions(filters:any): Observable<SortOptions[]> {
		let params = new URLSearchParams();
		params.set('_sort',String(filters.sortBy));
		params.set('_order','ASC');

		return this.http.get('http://localhost:3000/sortOptions',{search:params}).map(res => res.json() as SortOptions[]);
	}
}