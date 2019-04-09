import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-List-details',
  templateUrl: './list-details.page.html',
  styleUrls: ['./list-details.page.scss'],
})
export class ListDetailsPage implements OnInit {
  skins:any = [];
 constructor(private ListService: ListService, private loadingController: LoadingController, private route: ActivatedRoute, private router: Router,
  private httpClient: HttpClient ) { }

 ngOnInit() {
   this.consultaSkins();
 }
 async consultaSkins(){
   const loading = await this.loadingController.create({
     message:'Carregando'
   });
   await loading.present();
   await this.ListService.getSkinsId(this.route.snapshot.paramMap.get('id')).subscribe(
     data=>{
       this.skins = data;
       console.log(this.skins);
       loading.dismiss();
     },
     error=>{
       console.log(error);
       loading.dismiss();
     }
   )
 }
}