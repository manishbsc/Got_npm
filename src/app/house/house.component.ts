import { Component, OnInit,OnDestroy} from '@angular/core';
import {GothttpService} from '../gothttp.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit,OnDestroy {
  public houses:any=[];
  constructor(public httpservice:GothttpService) { }

  ngOnInit() {
    this.houses=this.httpservice.getHouses().subscribe(
        data => {
          console.log(data);
          this.houses = data;
          console.log(this.houses);
          console.log("Characters")
          this.houses.sort((a, b) => a.name.localeCompare(b.name));
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
