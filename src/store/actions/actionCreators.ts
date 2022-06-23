import { Actions } from "./actionTypes";
import {v4} from "uuid";

export const setAdd = (note: string, tag?: string) => ({
    type: Actions.SET_ADD,
    payload: {
        id: v4(),
        note,
        tag
    },
});
export const setAddTag = (id: string, tag?: string) => ({
    type: Actions.SET_ADD_TAG,
    payload: {
        id,
        tag
    },
});

export const setEdit = (id: string, note: string, tag?: string) => ({
    type: Actions.SET_EDIT,
    payload: {
        id,
        note,
        tag,
    },
});

export const setRemove = (id: string) => ({
    type: Actions.SET_REMOVE,
    payload: id,
});

export const setFilter = (filter: string) => ({
    type: Actions.SET_FILTER,
    payload: filter,
});
