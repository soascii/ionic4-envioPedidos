import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import { NgZone } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';


declare var google;

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class mapPage implements OnInit {



  mapRef = null;

  constructor(
    private geolocation: Geolocation,
    private loadCtrl: LoadingController,
    private _ngZone: NgZone,
    private mapAPILoader: MapsAPILoader
  ) {
  }
  
  ngOnInit() {
      this.loadMap();
  
  }
  
 async loadMap() {

  const loading = await this.loadCtrl.create();
  loading.present();

  const rta = await this.geolocation.getCurrentPosition();
  const myLatLang = {
        lat: rta.coords.latitude,
        lng: rta.coords.longitude
      };
  console.log(myLatLang);
  const mapEle: HTMLElement = document.getElementById('map');
  this.mapRef = new google.maps.Map(mapEle, {
        center: myLatLang,
        zoom: 15
      });

  google.maps.event.addListenerOnce(this.mapRef, 'idle', () => {
           // loaded
           loading.dismiss();
           this.addMarker(myLatLang.lat, myLatLang.lng);
        });
      }

  
  private addMarker(lat: number, lng: number) {

          const marker = new google.maps.Marker({
            position: {lat, lng},
            zoom: 8,
            map: this.mapRef,
            title: 'My Position!'
          })};
     
        }
        
      

      