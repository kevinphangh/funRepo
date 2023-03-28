import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})

export class ProductSearchComponent {
  enteredSearchValue : string = "";
  timerId: any; 

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    clearTimeout(this.timerId); 
    this.timerId = setTimeout(() => {
      this.searchTextChanged.emit(this.enteredSearchValue.toLowerCase()); 
    }, 150) 
  }

}
