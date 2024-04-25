import { atom } from 'jotai';
import { pinkBook } from '../assets/Story/Title';

export const accessTokenAtom = atom(localStorage.getItem('accessToken') || '');

export const canvasImageDataAtom = atom<string | null>(null);
export const characterNameAtom = atom<string | null>(null);
export const characterPersonalityAtom = atom<string | null>(null);
export const characterIdAtom = atom<number | null>(null);

export const bookLengthAtom = atom<number | null>(null);
export const bookBGInit = atom<string | null>(null);

export const bgAtom1 = atom<string | null>(null);
export const bgAtom2 = atom<string | null>(null);
export const bgAtom3 = atom<string | null>(null);
export const bgAtom4 = atom<string | null>(null);
export const bgAtom5 = atom<string | null>(null);

export const contextAtom1 = atom<string | null>(null);
export const contextAtom2 = atom<string | null>(null);
export const contextAtom3 = atom<string | null>(null);
export const contextAtom4 = atom<string | null>(null);
export const contextAtom5 = atom<string | null>(null);

export const questAtom1 = atom<string[]>([]);
export const questAtom2 = atom<string[]>([]);
export const questAtom3 = atom<string[]>([]);
export const questAtom4 = atom<string[]>([]);
export const questAtom5 = atom<string[]>([]);

export const bookTitleAtom = atom<string | null>(null);
export const bookAuthorAtom = atom<string | null>(null);
export const bookIdAtom = atom<string | null>(null);
export const bookCreateDate = atom<string | null>(null);
export const bookColorAtom = atom(pinkBook);



/*
export const updateToken = (newToken) => {
  localStorage.setItem('accessToken', newToken);
  accessTokenAtom[1](newToken);
};

export const nicknameAtom = atom(localStorage.getItem('nickname') || '');

export const updateNickname = (newNickname) => {
  localStorage.setItem('nickname', newNickname);
  nicknameAtom[1](newNickname);
};

export const selectedItemsAtom = atom(localStorage.getItem('nickname') || '');

const letterboxInitialData = {
  shape: "shape1",
  color: "red",
  ornaments: "orna1"
};

export const letterboxData = atom(letterboxInitialData);
*/