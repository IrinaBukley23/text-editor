export enum Actions {
    SET_ADD = 'SET_ADD',
    SET_EDIT = 'SET_EDIT',
    SET_REMOVE = 'REMOVE',
    SET_FILTER = 'SET_FILTER',
    SET_ADD_TAG = 'SET_ADD_TAG',
};

export type Action = 
| {
    type: Actions.SET_ADD,
    payload: {
        id: string,
        note: string,
        tag?: string,
    };
}
| {
    type: Actions.SET_EDIT,
    payload: {
        id: string,
        note: string,
        tag?: string,
    };
}
| {
    type: Actions.SET_REMOVE,
    payload: string;
}
| {
    type: Actions.SET_FILTER,
    payload: string;
}
| {
    type: Actions.SET_ADD_TAG,
    payload: {
        id: string,
        tag: string,
    };
}