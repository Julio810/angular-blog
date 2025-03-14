import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  addPhoto: string = "https://blog.bbnd.eu/wp-content/uploads/2024/11/angular19-860x484.png"
  addDescricao: string = "Confira a versão mais atualizada do Angular"
  addParagrafo: string = "O Angular 19 chegou trazendo uma série de recursos que prometem transformar a experiência de desenvolvimento e entrega de aplicações web.Entre as principais novidades estão o Incremental Hydration, que otimiza o desempenho de aplicações SSR, o modo de renderização por rota e a evolução do sistema de reatividade com signals e novas APIs estabilizadas."

  constructor () {}

  ngOnInit(): void {
  }
  
}