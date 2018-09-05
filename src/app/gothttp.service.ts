import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError} from "rxjs";
import{map,catchError} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class GothttpService {
  public characters;

  private charUrl = 'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50';
  private bookUrl = 'https://www.anapioficeandfire.com/api/books/?page=1&pageSize=50';
  private houseUrl = 'https://www.anapioficeandfire.com/api/houses/?page=1&pageSize=20'; 

private handleError(err: HttpErrorResponse) {
  console.log("Handle error Http calls")
  console.log(err.message);
  return Observable.throw(err.message)
}

  constructor(private _http:HttpClient) {
    console.log("initialized");
  }

   getChar(): any {
     console.log("inside getchar")
    let myResponse = this._http.get(this.charUrl)
    catchError(error=>{return throwError("something went wrong")}
    );
    console.log(myResponse);
    return myResponse;
} 
getBooks(): any {
  let myResponse = this._http.get(this.bookUrl)
  return myResponse;
}
getHouses(): any {
  let myResponse = this._http.get(this.houseUrl)
  catchError(error=>{return throwError("something went wrong")}
    );
  return myResponse;
}
singleView(_url): any {
  let myResponse = this._http.get(_url)
  return myResponse;
}

}
