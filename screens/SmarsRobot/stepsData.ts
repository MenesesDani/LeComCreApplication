
export type Step = {
  title: string;
  header: string;
  body: string;
  gif: any;
};

export const steps: Step[] = [
  {
    title: 'Montagem',
    header: 'Entendendo tudo',
    body:
      'Antes de começar, é importante organizar todos os materiais. A estrutura do robô é composta por peças impressas em 3D, a parte eletrônica, dois motores, Arduino, driver e sensor ultrassônico.',
    gif: require('../../assets/GifTest.gif'),
  },
  {
    title: 'Peças',
    header: 'Peças necessárias',
    body: 'Separe as peças impressas em 3D e confira se falta alguma antes de começar.',
    gif: require('../../assets/GifTest.gif'),
  },
  {
    title: 'Montagem inicial',
    header: 'Base do robô',
    body: 'Monte a base usando as peças A e B, seguindo as marcações.',
    gif: require('../../assets/GifTest.gif'),
  },

];
