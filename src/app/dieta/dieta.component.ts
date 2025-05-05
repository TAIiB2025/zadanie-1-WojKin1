import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietaService } from '../services/dieta.service';

@Component({
  selector: 'app-dieta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.css']
})
export class DietaComponent {
  constructor(private dietaService: DietaService) {}

  pobierzSume(): number {
    return this.dietaService.pobierzSume();
  }

  resetuj() {
    this.dietaService.wyzeruj();
  }
}
