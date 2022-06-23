import { Action, Actions } from "./actions/actionTypes";
import { initialState, INote, State } from "./utils";

export const notesReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case Actions.SET_ADD: {
            let obj = {
                id: action.payload.id,
                note: action.payload.note,
                tag: action.payload.note.split(' ').map(elem => {
                    return (elem.includes('#') && elem.length > 1 ) ? elem : null;
                    }
                ).filter(elem => elem !== null).join(' '),
            }
            return {
                ...state,
                notes: [...state.notes, obj],
            }
        }
        case Actions.SET_ADD_TAG: {
            return {
                ...state,
                notes: state.notes?.map((item: INote) => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            tag: action.payload.tag,
                        }
                    }
                    return item;
                }),
            }
        }
        case Actions.SET_EDIT: {
            let editTag = action.payload.note.split(' ').map(elem => {
                return (elem.includes('#') && elem.length > 1 ) ? elem : null;
                }
            ).filter(elem => elem !== null).join(' ');
            return {
                ...state,
                notes: state.notes.map((item: INote) => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            note: action.payload.note,
                            tag: editTag,
                        }
                    }
                    return item;
                }),
            }
        }
        case Actions.SET_REMOVE: {
            return {
                ...state,
                notes: state.notes.filter( item => item.id !== action.payload )
            }
        }
        case Actions.SET_FILTER: {
            return {
                ...state,
                notes: state.notes.filter( item => item.tag === action.payload )
            }
        }
        default:
            return state;
    }
};
