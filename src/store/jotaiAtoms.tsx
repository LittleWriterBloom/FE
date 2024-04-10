import { atom } from 'jotai';

export const accessTokenAtom = atom(localStorage.getItem('accessToken') || '');

export const canvasImageDataAtom = atom<string | null>(null);
export const characterNameAtom = atom<string | null>(null);
export const characterPersonalityAtom = atom<string | null>(null);
export const characterId = atom<number | null>(null);

export const bookLength = atom<number | null>(null);
export const bookBGInit = atom<string | null>(null);

export const background1 = atom<string | null>(null);
export const background2 = atom<string | null>(null);
export const background3 = atom<string | null>(null);

export const context1 = atom<string | null>(null);
export const context2 = atom<string | null>(null);
export const context3 = atom<string | null>(null);

export const question2 = atom<string[]>([]);
export const question3 = atom<string[]>([]);

export const bookId1 = atom<string | null>(null);
export const bookId2 = atom<string | null>(null);
export const bookId3 = atom<string | null>(null);

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