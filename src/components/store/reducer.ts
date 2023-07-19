import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Book {
  Title: string;
  Year: string;
  Id: number;
  Img_url: string;
}

export interface BookState {
  isOpen: any;
  favoriteBooks: Book[];
}

const initialState: BookState = {
  favoriteBooks: [],
  isOpen: undefined
};

