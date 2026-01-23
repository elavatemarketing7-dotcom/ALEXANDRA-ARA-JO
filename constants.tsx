
import React from 'react';
import { Shield, Sparkles, Heart, Clock, CheckCircle, UserCheck } from 'lucide-react';

export const EXPERT_NAME = "Alexandra Araújo";
export const EXPERT_ROLE = "Biomédica Esteta";
export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5531998346472&text&type=phone_number&app_absent=0";
export const INSTAGRAM_URL = "https://www.instagram.com/dra.alexandraraujo/";

export const IMAGES = {
  main: "https://i.imgur.com/mWsawRa.png",
  secondary: "https://i.imgur.com/tk8cZhU.png",
  tertiary: "https://i.imgur.com/jO4rxXs.png",
  video: "https://i.imgur.com/QgQCO7L.mp4"
};

export const RESULTS_GALLERY = [
  "https://i.imgur.com/yGk9EOP.png",
  "https://i.imgur.com/mpvHavP.png",
  "https://i.imgur.com/zq2yqYS.png",
  "https://i.imgur.com/JzEkXU7.png",
  "https://i.imgur.com/xnKXOPf.png",
  "https://i.imgur.com/3pqplNk.png",
  "https://i.imgur.com/OVlV1ei.png",
  "https://i.imgur.com/XkvjJ0h.png",
  "https://i.imgur.com/aM5adKC.png",
  "https://i.imgur.com/iTkHvKz.png"
  // Adicione novos links de resultados abaixo seguindo o padrão
];

export const BASTIDORES_GALLERY = [
  "https://i.imgur.com/xd4gucv.png",
  "https://i.imgur.com/1MUSVU3.png",
  "https://i.imgur.com/qXm9vfh.png",
  "https://i.imgur.com/MEeTmUi.png",
  "https://i.imgur.com/DYasqED.png"
  // Adicione novos links de bastidores abaixo
];

export const FEEDBACK_GALLERY = [
  "https://i.imgur.com/LuhkEAM.png",
  "https://i.imgur.com/PanTTJ9.png",
  "https://i.imgur.com/Q8YtDhq.png",
  "https://i.imgur.com/zvtCPbs.png",
  "https://i.imgur.com/d1TxJgJ.png",
  "https://i.imgur.com/L5SdNV5.png",
  "https://i.imgur.com/3KSANl1.png"
  // Adicione novos links de comentários abaixo
];

export const DIFFERENTIATORS = [
  {
    icon: <Shield className="w-6 h-6 text-amber-600" />,
    title: "Avaliação Honesta",
    desc: "Não vendo procedimentos, vendo resultados reais e necessários para você."
  },
  {
    icon: <UserCheck className="w-6 h-6 text-amber-600" />,
    title: "Atendimento Exclusivo",
    desc: "Cada rosto é único. Meu método foca na sua individualidade absoluta."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-amber-600" />,
    title: "Naturalidade",
    desc: "O melhor elogio é quando ninguém percebe que você 'fez algo'."
  },
  {
    icon: <Clock className="w-6 h-6 text-amber-600" />,
    title: "Suporte Pós-Procedimento",
    desc: "Acompanhamento próximo para garantir sua segurança e satisfação."
  }
];

export const STEPS = [
  {
    title: "Conexão Inicial",
    desc: "Conversamos via WhatsApp para entender suas expectativas e alinhar sua vinda."
  },
  {
    title: "Diagnóstico Facial",
    desc: "Presencialmente, realizamos uma análise profunda de simetria e necessidades."
  },
  {
    title: "Plano Personalizado",
    desc: "Criamos seu protocolo de beleza com foco em naturalidade e segurança."
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "O que mais te incomoda hoje ao se olhar no espelho?",
    options: ["Linhas de expressão/Rugas", "Falta de volume nos lábios", "Flacidez ou contorno facial", "Manchas ou textura da pele"]
  },
  {
    id: 2,
    question: "Qual seu maior medo ao realizar um procedimento estético?",
    options: ["Ficar com aspecto artificial", "Sentir dor durante o processo", "Não gostar do resultado", "Complicações na recuperação"]
  },
  {
    id: 3,
    question: "Você já realizou algum procedimento estético anteriormente?",
    options: ["Sim, e amei os resultados", "Sim, mas não tive boa experiência", "Não, seria minha primeira vez", "Estou apenas pesquisando no momento"]
  }
];
