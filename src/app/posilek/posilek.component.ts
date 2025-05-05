import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Posilek } from '../models/posilek.model';

@Component({
  selector: 'app-posilek',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posilek.component.html',
  styleUrls: ['./posilek.component.css']
})
export class PosilekComponent {
  @Input() posilek!: Posilek;
  @Output() dodanoDoDiety = new EventEmitter<void>();

  pokazSzczegoly = true;

  dodaj() {
    this.dodanoDoDiety.emit();
  }

  przelaczWidok() {
    this.pokazSzczegoly = !this.pokazSzczegoly;
  }
}
