import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Posilek } from '../models/posilek.model';
import { PosilekComponent } from '../posilek/posilek.component';
import { DietaService } from '../services/dieta.service';

@Component({
  selector: 'app-lista-posilkow',
  standalone: true,
  imports: [CommonModule, PosilekComponent],
  templateUrl: './lista-posilkow.component.html',
  styleUrls: ['./lista-posilkow.component.css']
})
export class ListaPosilkowComponent implements OnInit {
  posilki: Posilek[] = [
    new Posilek('pizza', 1200, 'pizzaHut', new Date(2024, 11, 1)),
    new Posilek('sałatka', 400, 'fitLife', new Date(2024, 9, 5)),
    new Posilek('burger', 900, 'mcBurger', new Date(2024, 8, 25)),
    new Posilek('tatar', 700, 'miesne sprawy', new Date(2024, 10, 2)),
    new Posilek('schabowy XXL', 1500, 'polska kuchnia', new Date(2024, 7, 19))
  ];

  constructor(private dietaService: DietaService) {}

  ngOnInit(): void {
    this.dietaService.zarejestrujReset(() => this.resetujIlosci());
  }

  dodano(posilek: Posilek) {
    posilek.iloscWDiecie++;
    this.dietaService.dodajKalorie(posilek.kalorycznosc);
  }

  resetujIlosci() {
    this.posilki.forEach(p => (p.iloscWDiecie = 0));
  }
}
