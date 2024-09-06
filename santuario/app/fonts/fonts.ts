import {Sedan} from 'next/font/google';
import localFont from 'next/font/local'

export const sedanSC = localFont({
  variable:'--sedan-sc',
  src: './SedanSC-Regular.ttf',
  style: 'noral',
  weight: '400',
});

export const sedan = Sedan({
  variable:'--sedan',
  subsets: ['latin'],
  weight: ['400'],
});