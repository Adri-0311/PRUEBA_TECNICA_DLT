import {Sedan} from 'next/font/google';
import localFont from 'next/font/local'

export const sedanSC = localFont({
  src: './SedanSC-Regular.ttf',
  style: 'noral',
  weight: '400',
});

export const sedan = Sedan({
  subsets: ['latin'],
  weight: ['400'],
});