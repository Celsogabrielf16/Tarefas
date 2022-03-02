import { CuriositiesComponent } from './../components/curiosities/curiosities.component';
import { PopularComponent } from './../components/popular/popular.component';
import { CardsComponent } from './../components/cards/cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CardsComponent, PopularComponent, CuriositiesComponent]
})
export class HomePageModule {}
