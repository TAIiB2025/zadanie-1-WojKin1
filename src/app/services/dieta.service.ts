import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DietaService {
  private sumaKalorii = 0;
  private callbackResetu: (() => void) | null = null;

  dodajKalorie(kcal: number) {
    this.sumaKalorii += kcal;
  }

  pobierzSume(): number {
    return this.sumaKalorii;
  }

  wyzeruj() {
    this.sumaKalorii = 0;
    if (this.callbackResetu) {
      this.callbackResetu();
    }
  }

  zarejestrujReset(callback: () => void) {
    this.callbackResetu = callback;
  }
}
