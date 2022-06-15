import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  DxTabPanelModule,
  DxTreeViewModule,
  DxTemplateModule,
} from 'devextreme-angular';

import {
  Continent, City, Country, ReservationService,
} from './service/reservation.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  templateUrl: 'reservation.component.html',
  styleUrls: ['reservation.component.scss'],
  providers: [ReservationService],
})

export class ReservationComponent {
  continents: Continent[];

  countryData: Country;

  citiesData: City[];

  tabPanelIndex: number;

  changeSelection(e) {
    const countryData = e.itemData;
    if (countryData.cities) {
      this.countryData = e.itemData;
      this.citiesData = countryData.cities;
      this.tabPanelIndex = 0;
    }
  }

  constructor(service: ReservationService) {
    this.continents = service.getContinents();
    this.countryData = this.continents[0].items[0];
    this.citiesData = this.countryData.cities;
    this.tabPanelIndex = 0;
  }
}

