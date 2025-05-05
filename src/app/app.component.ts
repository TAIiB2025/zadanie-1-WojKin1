import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPosilkowComponent } from './lista-posilkow/lista-posilkow.component';
import { DietaComponent } from './dieta/dieta.component';




@Component({


  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListaPosilkowComponent, DietaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  pokazujPosilki = true;

  przelaczWidok() {
    this.pokazujPosilki = !this.pokazujPosilki;
  }
}
