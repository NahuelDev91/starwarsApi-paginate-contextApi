import { Character, DefaultResponse } from '../interfaces/StartWars';

const getCharacters = async (page: number): Promise<DefaultResponse> => {
    const data = await fetch(`${process.env.REACT_APP_BASE_URL}?page=${page}`)
    const characters = await data.json();
    return characters
}

const getCharacter = async (url: string): Promise<Character> => {
    const data = await fetch(url)
    const currentCharacter = await data.json();
    return currentCharacter
}

export const apiStarWars = {
    getCharacter,
    getCharacters
}