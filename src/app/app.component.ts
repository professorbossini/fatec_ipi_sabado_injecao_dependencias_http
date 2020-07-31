import { Component } from '@angular/core';
import { PrevisoesService } from './previsoes.service'
import { Previsao } from './model/previsao'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  private previsoes: Previsao[];

  constructor(
    previsoesService: PrevisoesService
  ) {
    previsoesService.obterPrevisoes().subscribe((previsoes) => {
      this.previsoes = previsoes['list'];
      console.log(this.previsoes);
    });
  }

}
