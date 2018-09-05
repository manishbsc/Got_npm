import { Component, OnInit, OnDestroy } from '@angular/core';
import{Location} from '@angular/common';
import{ActivatedRoute,Router} from "@angular/router";
import {GothttpService} from '../gothttp.service';

 
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers:[Location]
})
export class ViewComponent implements OnInit,OnDestroy{
  public current;
 

  constructor(private _route:ActivatedRoute,private router:Router,private httpService:GothttpService,private location:Location) { 
    console.log("blog  view constrcutor");
  }

  ngOnInit() {
   
    console.log("ngonoit blog view");
    //getting blog id from route after clicking view in home.
    let myblogId=this._route.snapshot.paramMap.get('id');
    console.log(myblogId);
    this.current=this.httpService.singleView(myblogId).subscribe(

      data =>{
        console.log("logging data");
        console.log(data);
        this.current=data;
      },
      error=>{
        console.log("some error has occured");
        console.log(error.errorMessage);
        alert("No data is  found");
        this.location.back();
        
      }
    )
    }
    ngOnDestroy() {
      console.log("destroyed");
    }
    goBackToPreviousPage(): any {

      this.location.back();
    
    }

  }