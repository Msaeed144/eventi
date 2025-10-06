interface CourseDate {
  year: number;
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
  image?: string; 
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