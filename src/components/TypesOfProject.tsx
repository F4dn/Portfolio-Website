export interface memberType {
    name: string;
    img: string;
    linkedin: string;
    github: string;
  }

export interface projectType {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    github: string;
    webapp: string;
    member: memberType[];
  }

export interface modalType {
    state : boolean;
    project : null | projectType;
}