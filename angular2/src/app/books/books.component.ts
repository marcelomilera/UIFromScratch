import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Books } from './shared/books.model';
import { SortOptions } from './shared/sortOptions.model';
import { BooksService } from './shared/books.service';

@Component({
	selector: 'books',
	templateUrl: 'books.component.html',
	styleUrls: ['./books.component.scss'],
	providers: [BooksService]
})

export class BooksComponent implements OnInit {
	books: Books[] = [];
	sortOptions: SortOptions[] = [];
	filtersBooks: any = { pageSize: "100", pageNumber: 1, sortBy: null, searchText: '' };
	filtersOptions: any = { sortBy: "id" };

	constructor(
		private booksService: BooksService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		//Obtener parámetros de la ruta actual
		this.route.params.subscribe(params => {
		    let searchText = params['searchText'];
		    //Si se escribió algo en el searchText
		    if (searchText)
		    	//Se agrega el filtro
		    	this.filtersBooks.searchText = searchText;
		    //Se actualiza la lista de libros
			this.UpdateList();
		});
	}
	UpdateList() {
		//Obtener libros
		this.booksService.getList(this.filtersBooks).subscribe((res) => {
			this.books = res;
		});
		//Obtener opciones de ordenamiento
		this.booksService.getSortOptions(this.filtersOptions).subscribe((res) => {
			this.sortOptions = res;
		});		
	}

	sort(value){
		this.filtersBooks.sortBy = value;
		//Obtener libros ordenados
		this.booksService.getList(this.filtersBooks).subscribe((res) => {
			this.books = res;
		});
	}
}