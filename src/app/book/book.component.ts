import { Component, OnInit,OnDestroy} from '@angular/core';
import {GothttpService} from '../gothttp.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit,OnDestroy{

public books:any=[];
constructor(public httpservice:GothttpService) { }

ngOnInit() {
  this.books=this.httpservice.getBooks().subscribe(
      data => {
        console.log(data);
        this.books = data;
        console.log(this.books);
        console.log("Characters")
        this.books.sort((a, b) => a.name.localeCompare(b.name));
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      });
} 

ngOnDestroy() {
  console.log("destroyed");
}
}


