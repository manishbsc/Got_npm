import { Component, OnInit,OnDestroy} from '@angular/core';
import {GothttpService} from '../gothttp.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements  OnInit,OnDestroy{

  characters:any=[];

  constructor(public httpservice:GothttpService) { }
  
    ngOnInit() {
      this.characters=this.httpservice.getChar().subscribe(
          data => {
            console.log(data);
            this.characters = data;
            console.log(this.characters);
            console.log("Characters")
            this.characters.sort((a, b) => a.name.localeCompare(b.name));
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
