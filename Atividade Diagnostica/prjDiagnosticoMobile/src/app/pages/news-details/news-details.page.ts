import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {

  index = 0;
  card: any;

  cards = [
    {
      index: 0,
      cover: './../../../assets/images/GTA V.jpg',
      title: 'Novo GTA está em desenvolvimento, afirma Rockstar',
      resume: 'Desenvolvedora anuncia que trabalha em novo game de uma das franquias mais bem-sucedidas da indústria, mas não divulga previsão de lançamento ',
      text1: 'A desenvolvedora Rockstar anunciou, nesta sexta (4), que está desenvolvendo um novo jogo da franquia "GTA", uma das mais bem-sucedidas da indústria dos games.',
      text2: '"Temos o prazer de confirmar que o desenvolvimento para o próximo título da série Grand Theft Auto está bem encaminhado", diz a empresa em comunicado. ',
      text3: 'A data de lançamento do jogo não foi divulgada. Nas redes sociais, o jogo está sendo chamado de "GTA 6", mas não há confirmação de que esse será o nome oficial.',
      text4: 'Estamos ansiosos para compartilhar mais assim que estivermos prontos, portanto, fique atento ao Rockstar Newswire para obter detalhes oficiais. Em nome de toda a nossa equipe, agradecemos a todos pelo apoio e mal podemos esperar para entrar no futuro com vocês!"',
      time: 'Há 2 semana em Games'
    },
    {
      index: 1,
      cover: './../../../assets/images/Battlefield 2042.jpg',
      title: 'Battlefield 2042: EA culpa pandemia e até Halo Infinite por fracasso do jogo',
      resume: 'Executivos admitem problemas em conferência interna da empresa.',
      text1: 'O lançamento de Battlefield 2042 foi no mínimo decepcionante (para não dizer um desastre), o que já levou a publisher Electronic Arts a reavaliar completamente o desenvolvimento dos jogos da série daqui para frente. E, mais recentemente, apontar para culpados pela péssima recepção do jogo.',
      text2: 'Uma reportagem do site Xfire assinada pelo jornalista e insider Tom Henderson — conhecido por fontes confiáveis especialmente para Call of Duty e Battlefield — relata que, na última terça-feira (15), a EA realizou uma reunião interna para discutir o direcionamento da empresa, e mais de 20 minutos teriam sido dedicados ao shooter da DICE.',
      text3: 'Laura Miele, chefe de estúdios da empresa, declarou que "é muito importante admitir quando temos erros", e que "este certamente é o caso com o lançamento de Battlefield, que fracassou em alcançar as expectativas de nossos jogadores, e também claramente não atingiu as nossas próprias expectativas."',
      text4: 'A reportagem indica que a executiva citou diversos fatores que levaram à recepção negativa do jogo, incluindo desde a atualização do motor gráfico Frostbite, desenvolvido pela própria DICE — "A versão da Frostbite que eles usavam era tão velha que tiveram que voltar e atualizar. Por isso foi basicamente colocar o jogo em um motor gráfico novo" — até problemas de adaptação com a pandemia de Covid-19 e trabalho de casa.',
      time: 'Há 1 semana em Games'
    },
    {
      index: 2,
      cover: './../../../assets/images/God of War Ragnarok.jpg',
      title: 'God of War Ragnarok: Data de lançamento, versão de PS4 e mais',
      resume: 'Afinal, Atreus será jogável? ',
      text1: 'God of War: Ragnarok, a sequência de God of War (2018) está entre os jogos mais esperados por donos de um PS5 ou PS4. Após o game anterior ter sido um dos mais elogiados da geração passada, é óbvio que todos estão esperando por um sucessor à altura.',
      text2: 'Nesta página, o The Enemy compilou todas as informações disponíveis a respeito do próximo título da franquia produzida pelo Santa Monic Studio. Conforme outras novidades forem anunciadas, atualizaremos o texto com as notícias mais recentes. Portanto, volte aqui com frequência.',
      text3: 'Anunciado em setembro de 2020, o sucessor de God of War é esperado para 2022, mas não existe uma data exata definida por enquanto ou mesmo uma janela menos abrangente. Originalmente, a previsão de estreia era 2021. No entanto, o projeto acabou sendo adiado.',
      text4: 'Não existe uma sinopse oficial para a continuação de God of War, mas o jogo deve dar continuidade aos acontecimentos apresentados no game de 2018. Afinal, o período entre a trilogia original e o reboot já está sendo abordado em uma HQ.',
      time: 'Há 3 semana em Games'
    },
    {
      index: 3,
      cover: './../../../assets/images/Horizon Forbidden West.jpg',
      title: 'Horizon Forbidden West: Amazon atrasa entrega e jogadores reclamam',
      resume: 'Horizon Forbidden West foi lançado nesta sexta-feira (18) após uma espera de muito tempo pela continuação da história de Aloy em Horizon Zero Dawn.',
      text1: 'Horizon Forbidden West foi lançado nesta sexta-feira (18) após uma espera de muito tempo pela continuação da história de Aloy em Horizon Zero Dawn. Contudo, o que deveria ser uma boa notícia para alguns fãs, acabou se tornando um pesadelo.',
      text2: 'Dezenas de usuários utilizaram as redes sociais para reclamar da Amazon, que atrasou o envio de pedidos feitos ainda durante a pré-venda. O principal produto afetado foi a Edição Especial do game, que vem com itens como um steelbook e livro de arte, e deveria ser entregue hoje.',
      text3: 'De acordo com e-mails que estão sendo divulgados pelos próprios usuários, a Amazon culpou um “atraso do fornecedor” para justificar a demora na entrega. O volume de reclamações foi tão grande que o nome da gigante do varejo chegou a entrar nos trendings topics do Twitter.',
      text4: '',
      time: 'Há 1 dia em Games'
    },
    {
      index: 4,
      cover: './../../../assets/images/Zelda Majora Mask 2.jpg',
      title: 'Zelda: Majora’s Mask chega ao Switch Online na próxima sexta (25)',
      resume: 'Clássico do N64 estará disponível para todos que possuírem a assinatura do NSO',
      text1: 'The Legend of Zelda: Majora Mask segue os eventos de outro clássico do N64, Ocarina of Time. No game, o jovem Link é atacado e amaldiçoado pelo personagem Skull Kid, que agora utiliza uma misteriosa máscara com poderes mágicos.',
      text2: 'Transportado para uma outra realidade, o herói agora se encontra no mundo de Termina, que ameaça ser completamente aniquilado pela queda da Lua no planeta, que acontecerá em três dias.',
      text3: 'Para impedir Skull Kid e a queda da Lua, Link terá que usar suas próprias máscaras com poderes especiais, além de usar sua capacidade de voltar no tempo para o início dos três dias, e salvar o mundo de Termina.',
      text4: 'Os fãs da franquia estão aguardando ansiosos pela sequência de The Legend of Zelda: Breath of the Wild, que teve apenas um pequeno trailer de anúncio revelado.',
      time: 'Há 1 dia em Games'
    }

  ]

  constructor(private router: ActivatedRoute) { }

  ngOnInit():void{
    this.index = this.router.snapshot.params['index'];
    this.card = this.cards[this.index];

    console.log('index: '+ this.card);
  }

}
