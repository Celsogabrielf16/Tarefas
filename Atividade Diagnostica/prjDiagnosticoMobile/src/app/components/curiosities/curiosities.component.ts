import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curiosities',
  templateUrl: './curiosities.component.html',
  styleUrls: ['./curiosities.component.scss'],
})
export class CuriositiesComponent implements OnInit {

  curiosities = [

    {
      index: 0,
      cover: './../../../assets/images/GTA V.jpg',
      title: 'Novo GTA está em desenvolvimento, afirma Rockstar',
      resume: 'Desenvolvedora anuncia que trabalha em novo game de uma das franquias mais bem-sucedidas da indústria, mas não divulga previsão de lançamento ',
      time: 'Há 2 semana em Games'
    },
    {
      index: 1,
      cover: './../../../assets/images/Battlefield 2042.jpg',
      title: 'Battlefield 2042: EA culpa pandemia e até Halo Infinite por fracasso do jogo',
      resume: 'Executivos admitem problemas em conferência interna da empresa.',
      time: 'Há 1 semana em Games'
    },
    {
      index: 2,
      cover: './../../../assets/images/God of War Ragnarok.jpg',
      title: 'God of War Ragnarok: Data de lançamento, versão de PS4 e mais',
      resume: 'Afinal, Atreus será jogável? ',
      time: 'Há 3 semana em Games'
    },
    {
      index: 3,
      cover: './../../../assets/images/Horizon Forbidden West.jpg',
      title: 'Horizon Forbidden West: Amazon atrasa entrega e jogadores reclamam',
      resume: 'Horizon Forbidden West foi lançado nesta sexta-feira (18) após uma espera de muito tempo pela continuação da história de Aloy em Horizon Zero Dawn.',
      time: 'Há 1 dia em Games'
    },
    {
      index: 4,
      cover: './../../../assets/images/Zelda Majora Mask 1.jpg',
      title: 'Zelda: Majora’s Mask chega ao Switch Online na próxima sexta (25)',
      resume: 'Clássico do N64 estará disponível para todos que possuírem a assinatura do NSO',
      time: 'Há 1 dia em Games'
    }

  ]

  constructor() { }

  ngOnInit() {}

}
