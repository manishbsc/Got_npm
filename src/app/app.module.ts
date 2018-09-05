import { BrowserModule } from '@angular/platform-browser'; //Browser module
import { NgModule } from '@angular/core';//mg module
import { AppComponent } from './app.component';//app module
import{RouterModule,Routes} from  '@angular/router';//for routing
import { HomeComponent } from './home/home.component';//home compo
import { ViewComponent } from './view/view.component';//view component
import { HttpClientModule } from '@angular/common/http';//http services
import { GothttpService } from './gothttp.service';//services to get the work done (suppose using a function)
import { FilterPipe} from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { CharacterComponent } from './character/character.component';
import { HouseComponent } from './house/house.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    FilterPipe,
    BookComponent,
    CharacterComponent,
    HouseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},// /home can be used as routing
      {path:'',redirectTo:'home',pathMatch:'full'},// home page will opne as home
      {path:'view/:id',component:ViewComponent},
      {path:'book',component:BookComponent},
      {path:'character',component:CharacterComponent},
      {path:'house',component:HouseComponent}
    ])
   
  ],
  providers: [GothttpService],//by defualt any one can 
  bootstrap: [AppComponent]
})
export class AppModule { }
