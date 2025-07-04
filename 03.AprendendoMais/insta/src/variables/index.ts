export type feedVarType = {
  id: string,
  nome: string,
  descricao: string,
  imgPerfil: string,
  imgPublicacao: string,
  likeada: boolean,
  likers: number,
}

export const feedVar: feedVarType[] = [
  {
    id: '1',
    nome: 'Lucas Silva',
    descricao: 'Mais um dia de muitos bugs :)',
    imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
    likeada: false,
    likers: 0
  },
  {
    id: '2',
    nome: 'Matheus',
    descricao: 'Isso sim é ser raiz!!!!!',
    imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
    likeada: false,
    likers: 0
  },
  {
    id: '3',
    nome: 'Jose Augusto',
    descricao: 'Bora trabalhar Haha',
    imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
    likeada: false,
    likers: 3
  },
  {
    id: '4',
    nome: 'Gustavo Henrique',
    descricao: 'Isso sim que é TI!',
    imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
    likeada: false,
    likers: 1
  },
  {
    id: '5',
    nome: 'Guilherme',
    descricao: 'Boa tarde galera do insta...',
    imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
    likeada: false,
    likers: 32
  }
]