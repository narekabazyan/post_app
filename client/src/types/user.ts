import { StaticImageData } from 'next/image';

export default interface User {
  id?: number;
  name: string;
  email: string;
  age: number;
  avatar: StaticImageData | string;
}
