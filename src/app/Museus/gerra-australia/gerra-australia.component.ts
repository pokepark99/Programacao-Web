import { Component, OnInit } from '@angular/core';

// interface Avaliacao {
//   estrelas: number;
//   nome: string;
//   comentario: string;
//   epoca: string;
//   tipoVisita: string;
// }

@Component({
  selector: 'app-gerra-australia',
  standalone: true,
  imports: [],
  templateUrl: './gerra-australia.component.html',
  styleUrl: './gerra-australia.component.css'
})

// @Component({
//   selector: 'app-gerra-australia',
//   templateUrl: './gerra-australia.component.html',
//   styleUrls: ['./gerra-australia.component.css']
// })

// export class GerraAustraliaComponent implements OnInit {
//   avaliacoes: Avaliacao[] = [
//     // Exemplo de avaliações
//     { estrelas: 5, nome: 'João', comentario: 'Excelente!', epoca: 'Janeiro', tipoVisita: 'família' },
//     { estrelas: 4, nome: 'Maria', comentario: 'Muito bom!', epoca: 'Fevereiro', tipoVisita: 'casais' },
//     // Adicione mais avaliações conforme necessário
//   ];

//   filtroClassificacao: number = 0;
//   filtroEpoca: string = '';
//   filtroTipoVisita: string = '';

//   avaliacoesFiltradas: Avaliacao[] = [];

//   constructor() { }

//   ngOnInit(): void {
//     this.avaliacoesFiltradas = this.avaliacoes;
//   }

//   reporFiltros(): void {
//     this.filtroClassificacao = 0;
//     this.filtroEpoca = '';
//     this.filtroTipoVisita = '';
//     this.avaliacoesFiltradas = this.avaliacoes;
//   }

//   aplicarFiltros(): void {
//     this.avaliacoesFiltradas = this.avaliacoes.filter(avaliacao => {
//       return (
//         (this.filtroClassificacao === 0 || avaliacao.estrelas === this.filtroClassificacao) &&
//         (this.filtroEpoca === '' || avaliacao.epoca === this.filtroEpoca) &&
//         (this.filtroTipoVisita === '' || avaliacao.tipoVisita === this.filtroTipoVisita)
//       );
//     });
//   }
// }

export class GerraAustraliaComponent {}