import { createStore, combineReducers  } from 'redux';
import { notesReducer } from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    notes: notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
