import { createContext } from "react";
import { Character } from '../interfaces/StartWars';

interface PropsContext {
    characters: Character[],
    character: Character,
    maxPage: number,
    currentPage:number,
    onLoadCharacters: () => void,
    onLoadCharacter: (character: Character) => void
    onChangePage: (page: number) => void
}

export const ContextStarWars = createContext({} as PropsContext);