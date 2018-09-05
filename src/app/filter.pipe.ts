import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

searchText = searchText.toLowerCase();

return items.filter( it => {
      return it.toLowerCase().includes(searchText);
    });
   }
}
/*
<div class="container" style="text-align: center">
 <h1 class="my-4 text-center">Game of Thrones
 </h1>
 <br/>

 <div class="row" *ngIf="characters.length>0">
 <div *ngFor="let everything of characters" class="col-lg-3 col-md-4 col-sm-6">
   <div *ngIf="everything.gender" class="card h-100">
     <div class="text-center card-header | filter : searchText">
       <h4>{{everything.name ||"A Secret Character"}}</h4>
     </div>
     <div class="card-body">
       <p class="card-text">Gender : {{everything.gender}}
         <br/> Alias : {{everything.aliases[0]}}</p>
     </div>
     <div class="text-center card-footer">
       <a href="javascript():void" [routerLink]="['/singleView',everything.url.split('api/').pop()]" class="btn btn-outline-primary">Find Out More!</a>
     </div>
   </div>
   <div *ngIf="everything.isbn" class="card h-100">
   
     <div class="text-center card-header">
       <h4>{{everything.name ||"Unnamed"}}</h4>
     </div>
     <div class="card-body">
       <p class="card-text">ISBN : {{everything.isbn}}</p>
     </div>
     <div class="text-center card-footer">
       <a href="javascript():void" [routerLink]="['/singleView',everything.url.split('api/').pop()]" class="btn btn-outline-secondary">Find Out More!</a>
     </div>
   </div>
   <div *ngIf="everything.region" class="card h-100">
     <div class="text-center card-header">
       <h4>{{everything.name ||"Unnamed"}}</h4>
     </div>
     <div class="card-body">
       <p class="card-text">Region : {{everything.region}}
         <br/> Seats : {{everything.seats[0]}}</p>
     </div>
     <div class="text-center card-footer">
       <a href="javascript():void" [routerLink]="['/singleView',everything.url.split('api/').pop()]" class="btn btn-outline-dark">Find Out More!</a>
     </div>
   </div>
 </div>
 </div>
 
 </div>*/