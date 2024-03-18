export interface Heroe{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    id?: number;
  };

  export interface HeroeBD{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    id?: number;
    _id?: number;
  };