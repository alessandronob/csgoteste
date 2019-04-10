import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  skins: [];
  param:string; 
  id:any;

  private exterior_name:string ;
  
  constructor(private ListService: ListService, private loadingController: LoadingController){}

  ngOnInit() {
    this.consultaSkins();
  }
  async consultaSkins(){
    const loading = await this.loadingController.create({
      message: 'Carregando ...'
    });
    
    await loading.present();
    
    // Define o parametro a ser passado
    let param = (typeof this.exterior_name === "undefined") ? '' : `?exterior=${this.exterior_name}`;
    await this.ListService.getSkins(param).subscribe(
      data=>{
        this.skins = data;
        loading.dismiss();
      }
    );
  }
}

