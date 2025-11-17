export const steps: Step[] = [
  {
    title: 'Montagem',
    header: 'Entendendo tudo',
    body:
      'Antes de começar, é importante organizar todos os materiais. A estrutura do robô é composta por peças impressas em 3D, a parte eletrônica, que inclui dois motores, uma placa Arduino, um driver de motor, um sensor ultrassônico e fios jumper para as conexões. Tudo que você precisa está na caixinha, vamos por partes!',
    gif: require('../../assets/constructions/Smars/Steps/GifStep1.gif'),
  },
  {
    title: 'Montagem',
    header: 'Instalando os motores',
    body:
      'Com a base montada, é hora de instalar os motores! Pegue os dois motores DC e encaixe cada um nas cavidades laterais do corpo, de forma que os eixos fiquem voltados para a traseira do robô. Certifique-se de que estejam bem fixos nas fendas — isso garantirá estabilidade durante o movimento.',
    gif: require('../../assets/constructions/Smars/Steps/GifStep2.gif'),
  },
  {
    title: 'Montagem',
    header: 'Rodas e esteiras',
    body:
      'Agora que os motores estão fixados, conecte os eixos às rodas. Encaixe os eixos nas laterais das pernas, posicione as rodas nas extremidades e coloque as esteiras ao redor delas, como em um pequeno tanque. As esteiras devem estar bem ajustadas para o robô se mover corretamente.',
    gif: require('../../assets/constructions/Smars/Steps/GifStep3.gif'),
  },
  {
    title: 'Montagem',
    header: 'Suporte para o sensor',
    body:
      'Pegue o suporte frontal, uma peça com dois buracos circulares, e encaixe na parte da frente do corpo do robô. Esse suporte servirá para instalar o sensor ultrassônico — os “olhos” do robô. O encaixe deve ser firme, mas sem forçar a peça, garantindo estabilidade para o sensor.',
    gif: require('../../assets/constructions/Smars/Steps/GifStep4.gif'),
  },
  {
    title: 'Montagem',
    header: 'Suporte para o Arduino',
    body:
      'Com a frente do robô montada, vamos instalar a base onde ficará a placa de controle. Pegue a peça retangular que serve como suporte para o Arduino e encaixe-a na parte traseira superior do corpo. Alinhe bem, pois nela será fixada a placa de circuito responsável por controlar o robô.',
    gif: require('../../assets/constructions/Smars/Steps/GifStep5.gif'),
  },
  {
    title: 'Montagem',
    header: 'Encaixe do Arduino',
    body:
      'Após fixar o suporte, posicione a placa Arduino sobre ele, encaixando como uma gaveta. Os furos da placa devem coincidir com os da estrutura. Evite forçar os componentes eletrônicos. Essa placa é o cérebro do robô e será responsável por executar todos os comandos.',
    gif: require('../../assets/constructions/Smars/Steps/GifStep6.gif'),
  },
  {
    title: 'Montagem',
    header: 'Conexão com o driver',
    body:
      'Hora de começar a parte elétrica! Conecte os fios dos motores ao driver de motor. Cada motor possui dois fios, que devem ser ligados aos canais de saída A e B do driver. Esse componente será o intermediário entre o Arduino e os motores, controlando a direção e a velocidade.',
    gif: require('../../assets/constructions/Smars/Steps/GifStep7.gif'),
  },
  {
    title: 'Montagem',
    header: 'Ligação do driver',
    body:
      'Com os motores conectados, ligue o driver ao Arduino. Conecte os pinos de controle do driver nas portas digitais 4, 5, 6 e 7 do Arduino. Em seguida, ligue o GND do driver ao GND do Arduino e o VCC à alimentação. Esses fios transmitem os sinais de comando para o movimento do robô.',
    gif: require('../../assets/constructions/Smars/Steps/GifStep8.gif'),
  },
  {
    title: 'Montagem',
    header: 'Instalação do sensor',
    body:
      'Agora é hora de instalar o sensor ultrassônico HC-SR04. Posicione-o nos furos do suporte frontal e conecte seus quatro pinos: VCC no 5V do Arduino, GND no GND, TRIG e ECHO em portas digitais diferentes. Esse sensor mede a distância até obstáculos usando ondas ultrassônicas.',
    gif: require('../../assets/constructions/Smars/Steps/GifStep9.gif'),
  },
  {
    title: 'Código',
    header: 'Colocando o código',
    body:
      'O Arduino já vem com o código pronto! Basta conectá-lo ao computador com o cabo azul da caixa e enviar o código. Depois, ligue na bateria e veja seu robô começar a funcionar.',
    gif: require('../../assets/constructions/Smars/Steps/GifStep10.gif'),
  },
  {
    title: 'Teste',
    header: 'Revise tudo!',
    body:
      'Antes de ligar, verifique se os fios estão firmes, se não há curto-circuito, se as rodas estão bem encaixadas e se as esteiras giram livremente. Tudo certo? É só ligar e começar a brincar!',
    gif: require('../../assets/constructions/Smars/Steps/GifStep11.gif'),
  },
];
