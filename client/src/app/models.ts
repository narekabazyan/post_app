import { StaticImageData } from 'next/image';

export interface User {
  id?: number;
  name: string;
  email: string;
  age: number;
  avatar: StaticImageData | string;
}
