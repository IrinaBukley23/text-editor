import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAdd } from '../../store/actions/actionCreators';

import './form.scss';

const Form = () => {
    const [newNote, setNewNote] = useState('');
    const dispatch = useDispatch();

    const onChangeNote = useCallback(  (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewNote(event.target.value);
    }, [setNewNote]);

    const onAdd = useCallback( () => {
        dispatch(setAdd(newNote));
        setNewNote('');
    }, [newNote, dispatch,] );


    return (
        <div className='form'>
            <textarea className='form_text' placeholder='Enter note...' value={newNote} onChange={onChangeNote} />
            <button className="form_btn" onClick={onAdd}>Add note</button>
        </div>
    )
};

export default Form;
