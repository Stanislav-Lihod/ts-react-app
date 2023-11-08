import {lazy} from 'react';

export const AsyncAboutPage = lazy(()=> new Promise(resolve =>{
  //@ts-ignore
  setTimeout(()=> resolve(import('./AboutPage')), 3000)
}));
