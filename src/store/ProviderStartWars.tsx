import { useCallback, useReducer } from 'react';
import { apiStarWars } from '../api/starWars';
import { Character } from '../interfaces/StartWars';
import { ContextStarWars } from './ContextStarWars';
import { reducerStarWars } from './reducerStarWars';

interface Props {
    children: JSX.Element,
}

export interface State {
    characters: Character[],
    character: Character,
    currentPage: number,
    maxPage: number,

}

const INITIAL_STATE: State = {
    characters: [],
    character: {} as Character,
    currentPage: 1,
    maxPage: 0,
}

export const ProviderStartWars = ({ children }: Props) => {

    const [state, dispatch] = useReducer(reducerStarWars, INITIAL_STATE);

    const onLoadCharacters = useCallback(async () => {
        const CHARACTERS_PER_PAGE = 10
        const { results, count } = await apiStarWars.getCharacters(state.currentPage)
        const maxPage = Math.ceil(count / CHARACTERS_PER_PAGE);

        dispatch({
            type: 'SET_STAR_WARS',
            payload: results
        })

        dispatch({
            type: 'SET_MAX_PAGE',
            payload: maxPage
        })

    }, [state.currentPage])

    const onChangePage = (page: number) => {
        dispatch({
            type: 'SET_CURRENT_PAGE',
            payload: page
        })
    }

    const onLoadCharacter = async (character: Character) => {
        const currentCharacter = await apiStarWars.getCharacter(character.url)
        dispatch({
            type: 'SET_CHARACTER_DETAIL',
            payload: currentCharacter
        })
    }

    return (
        <ContextStarWars.Provider value={{
            ...state,
            onLoadCharacters,
            onLoadCharacter,
            onChangePage
        }}>
            {children}
        </ContextStarWars.Provider>
    )
}