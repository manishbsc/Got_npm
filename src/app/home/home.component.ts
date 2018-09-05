import { Component, OnInit,OnDestroy } from '@angular/core';
import {GothttpService} from '../gothttp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {



constructor(public httpservice:GothttpService) { }

  ngOnInit() {
  }
 
  ngOnDestroy() {
    console.log("destroyed");
  }
}
