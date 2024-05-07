import { atom } from 'jotai';
import { pinkBook } from '../assets/Story/Title';

export const accessTokenAtom = atom(localStorage.getItem('accessToken') || '');

export const canvasImageDataAtom = atom<string>("");
export const aiImageDataAtom = atom<string>("");
export const originImageDataAtom = atom<string>("");
export const characterDescriptAtom = atom<string>("");
export const characterNameAtom = atom<string>("");
export const characterPersonalityAtom = atom<string>("");
export const characterIdAtom = atom<number | null>(null);
export const characterImgAtom = atom<string>("");

export const bookLengthAtom = atom<number | null>(null);
export const bookBGInit = atom<string>("");

export const bgAtom1 = atom<string>("");
export const bgAtom2 = atom<string>("");
export const bgAtom3 = atom<string>("");
export const bgAtom4 = atom<string>("");
export const bgAtom5 = atom<string>("");
export const bgAtom6 = atom<string>("");
export const bgAtom7 = atom<string>("");

export const contextAtom1 = atom<string>("");
export const contextAtom2 = atom<string>("");
export const contextAtom3 = atom<string>("");
export const contextAtom4 = atom<string>("");
export const contextAtom5 = atom<string>("");
export const contextAtom6 = atom<string>("");
export const contextAtom7 = atom<string>("");

export const questAtom1 = atom<string[]>([]);
export const questAtom2 = atom<string[]>([]);
export const questAtom3 = atom<string[]>([]);
export const questAtom4 = atom<string[]>([]);
export const questAtom5 = atom<string[]>([]);
export const questAtom6 = atom<string[]>([]);
export const questAtom7 = atom<string[]>([]);

export const bookTitleAtom = atom<string>("");
export const bookAuthorAtom = atom<string>("");
export const bookIdAtom = atom<string>("");
export const bookCreateDate = atom<string>("");
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