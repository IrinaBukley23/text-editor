export type State = {
    notes: INote[];
};

export interface INote {
    id: string;
    note: string;
    tag?: string,
};

export const initialState = {
    notes: [],
};
