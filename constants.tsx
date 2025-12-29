
import React from 'react';
import { Testimonial, Module, Bonus } from './types';

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Qual seu nível atual no Violão?",
    options: ["Não sei nada", "Toco o básico", "Intermediário", "Avançado"],
    feedback: "Perfeito! Saber seu ponto de partida é o primeiro passo para uma evolução acelerada."
  },
  {
    id: 2,
    question: "Qual a sua maior dificuldade ao tentar tocar?",
    options: [
      "Fico perdido com tanta informação",
      "Conheço a teoria, mas não consigo aplicar",
      "Travo na hora de tocar para alguém",
      "Meu resultado é sempre o mesmo"
    ],
    feedback: "Entendo perfeitamente. O excesso de informação sem ordem é o que mais trava alunos hoje em dia."
  },
  {
    id: 3,
    question: "Você já tentou aprender isso antes?",
    options: [
      "Sim, mas achei muito confuso",
      "Sim, mas nunca consegui aplicar",
      "Tentei, mas não entendi a lógica",
      "Nunca estudei formalmente"
    ],
    feedback: "Isso mostra que você não precisa de mais conteúdo, mas sim de um MÉTODO organizado."
  },
  {
    id: 4,
    question: "Como você prefere aprender novas técnicas?",
    options: [
      "Com guias visuais claros",
      "Com exercícios práticos e organizados",
      "Com explicação teórica aplicada",
      "Todas as opções acima"
    ],
    feedback: "Excelente! A combinação de visual com prática é a chave para o aprendizado definitivo."
  },
  {
    id: 5,
    question: "O que mais te ajudaria HOJE a evoluir?",
    options: [
      "Ver o mapa completo da habilidade",
      "Saber quando e como usar a técnica",
      "Entender a lógica por trás",
      "Tudo o que foi citado"
    ],
    feedback: "Foco no resultado! Ter um mapa claro elimina 80% das suas dúvidas imediatas."
  },
  {
    id: 6,
    question: "O que mais atrapalha seu avanço hoje?",
    options: [
      "Falta de tempo",
      "Falta de organização",
      "Falta de material claro",
      "Nada, estou 100% decidido"
    ],
    feedback: "Você está no lugar certo. Nosso sistema foi desenhado para quem tem pouco tempo e precisa de clareza."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Eduardo",
    location: "São Paulo - SP",
    text: "Eu estava estagnado há 2 anos. Com o método, em 3 semanas já estava tocando músicas que achava impossíveis. A didática é surreal!",
    avatar: "https://picsum.photos/seed/carlos/100/100"
  },
  {
    name: "Mariana Silva",
    location: "Curitiba - PR",
    text: "Finalmente alguém que explica o 'porquê' das coisas. O material visual ajuda demais a não se perder. Nota 10!",
    avatar: "https://picsum.photos/seed/mari/100/100"
  },
  {
    name: "Ricardo Mendes",
    location: "Belo Horizonte - MG",
    text: "Melhor investimento que fiz. O suporte é rápido e os bônus valem mais que o próprio curso. Recomendo para todos.",
    avatar: "https://picsum.photos/seed/ric/100/100"
  }
];

export const MODULES: Module[] = [
  { title: "Módulo 1: Desbloqueando a Base", description: "Construa as fundações sólidas que 90% dos amadores ignoram." },
  { title: "Módulo 2: O Mapa da Visualização", description: "Aprenda a enxergar o instrumento de forma clara e intuitiva." },
  { title: "Módulo 3: Fluência e Mecanismos", description: "Técnicas avançadas para ganhar agilidade sem esforço desnecessário." },
  { title: "Módulo 4: Repertório Estratégico", description: "Aplique tudo em músicas reais seguindo uma ordem lógica de dificuldade." },
  { title: "Módulo 5: Dominando a Improvisação", description: "Liberdade total para criar suas próprias frases e solos com confiança." }
];

export const BONUSES: Bonus[] = [
  { title: "Acervo de Materiais Premium", originalPrice: 497, description: "PDFs, Playbacks e Guias de Estudo detalhados para cada aula." },
  { title: "Comunidade VIP de Alunos", originalPrice: 997, description: "Acesso vitalício ao nosso grupo secreto para troca de experiências e feedbacks." },
  { title: "Mentorias Gravadas Exclusivas", originalPrice: 397, description: "Aulas extras focadas nas dúvidas mais comuns dos alunos iniciantes." }
];
