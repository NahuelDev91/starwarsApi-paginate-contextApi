import { Character } from '../interfaces/StartWars';
import { State } from './ProviderStartWars';

type Action = | { type: 'SET_STAR_WARS', payload: Character[] }
    | { type: 'SET_CHARACTER_DETAIL', payload: Character }
    | { type: 'SET_CURRENT_PAGE', payload: number }
    | { type: 'SET_MAX_PAGE', payload: number }

export const reducerStarWars = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_STAR_WARS':
            return {
                ...state,
                characters: [...action.payload],
            };
        case 'SET_CHARACTER_DETAIL':
            return {
                ...state,
                character: action.payload,
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            };
            case 'SET_MAX_PAGE':
            return {
                ...state,
                maxPage: action.payload,
            };
        default:
            return state;
    }
}