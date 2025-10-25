interface CourseDate {
  year: string;
  month: string;
  day: number;
  houre: string;
}

interface Organizer {
  name: string;
  rate: number;
  description: string;
}

interface CourseDescriptionSection {
  title: string;
  text?: string;
  items?: string[];
}

interface CourseDescriptions {
  first: CourseDescriptionSection;
  seccond: CourseDescriptionSection;
}

interface CourseTitle {
  title: string;
  teacher: string;
}

export interface Course {
  id: number;
  title: string;
  date: CourseDate;
  Organizer: Organizer;
  link:string;
  image: string; 
  special: boolean; 
  status:  string;
  type: string;
  like: boolean;
  price: string;
  categories: string[];
  time: number;
  holdingMethod: string[];
  address: string;
  location: string;
  descriptions: CourseDescriptions;
  courseTitles: CourseTitle[];
}
export interface Organaizer {
    id:number;
    name:string;
    rate:number
}
export type DescriptionItem = {
  title: string;
  text: string[];
};

export type CommentItem = {
  id: number;
  userName: string;
  rate: number;            // بهتره عدد باشه
  qualitativeRate: string;
  text: string;
  day: number;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export interface ExamItem {
  enName: string;
  faName: string;
  miniDescription: string;
  price: number;
  question: number;
  faDetailsName: string;
  detailsDescription: string;
  descriptions: DescriptionItem[];
  comments: CommentItem[];
  frequentlyQuestions: FAQItem[];
}
