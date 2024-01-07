import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-elementi',
  template: `
    <h1 class="titolo">Gli Animali più Grandi del Mondo </h1>
    <ul >
      <li *ngFor="let elemento of elementi" class="elemento" >{{ elemento }}</li>
      <br> <!-- Aggiungiamo un <br> per separare gli elementi -->
    </ul>
    
  `
  ,
  styles: [`
  .elemento {
    font-size: 50px;
  }
  .titolo{
    font-size: 70px;
  }
`],
})
export class ListaComponent {
  elementi: string[] = ['Balenottera Azzurra', ' Balenottera Comune', 'Capodoglio', 'Calamaro Colossale'];
  
}
