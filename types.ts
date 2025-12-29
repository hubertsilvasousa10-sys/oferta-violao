
export type FunnelState = 'QUIZ' | 'SALES_PAGE' | 'OFFER_SPECIAL';

export interface QuizAnswer {
  questionId: number;
  answerText: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  avatar?: string;
}

export interface Module {
  title: string;
  description: string;
}

export interface Bonus {
  title: string;
  originalPrice: number;
  description: string;
}
