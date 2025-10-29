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
 export type Specialty = {
  id: string; // برای کلید یکتا
  type: string;
  skill: string;
  level: string;
  link: string;
  description: string;
};
export type Jobs = {
  id: string;
  title:string;
  company:string;
  start:string;
  end:string;
  type:string;
  level:string;
  description:string

}
export type Tashakol = {
  id:string;
  name:string;
  type:string;
  role:string;
  start:string;
  time:string;
  description:string;
}
export type University = {
  id:string;
  grade:string;
  type:string;
  field:string;
  trend:string;
  uniname:string;
  uniend:string
}
export type Howze = {
  id:string;
  hzlevel:string;
  hzname:string;
  hzstart:string;
  hzend:string;
}
export type ArticleType = {
  id:string;
  name:string;
  type:string;
  status:string;
  link:string;
  ddrcode:string;
  description:string
}
export type OlympiadType ={
  id:string
   name:string,
    type:string,
    year:string,
    rank:string,
    description:string, 
}
export type BooksType = {
    id:string,
    name:string,
    subject:string,
    status:string,
    year:string,
    role:string,
    shabek:string,
    description:string,
}
export type ConferanceType = {
  id:string,
  conferanceName: string,
  articleName: string,
  articleType: string,
  articleStatus:string,
  year:string,
  link: string,
  description: string,
}