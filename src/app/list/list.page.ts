import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  skins: [];
  param:string;
  constructor(private ListService: ListService){}

  ngOnInit() {
    this.consultaSkins();
  }


  
  consultaSkins(){
   return this.ListService.getSkins().subscribe(
    data=>{
      this.skins = data;
      //console.log(this.tipo);
    }
  ).add();

  }


  

}

