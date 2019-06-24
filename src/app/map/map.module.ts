import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { mapPage } from './map.Page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: mapPage
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiqUjl1gCn2A-VylI5poM-KLNjXwhlR1g',
      libraries: ["places"],
    })
  ],
  declarations: [mapPage]
})

export class mapPageModule {}
