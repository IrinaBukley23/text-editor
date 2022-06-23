import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddTag, setEdit, setRemove } from '../../store/actions/actionCreators';
import './note.scss';

interface IProps {
    id: string;
    note: string;
    tag?: string;
}

const Note: React.FC<IProps> = ({ note, id, tag }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [updatedNote, setUpdatedNote] = useState(note);
    const [updatedTag, setUupdatedNewTag] = useState(tag);
    const dispatch = useDispatch();
    
    const onEdit = useCallback( () => {
        setIsEdit(true);
    }, [setIsEdit] );

    const onSave = useCallback( () => {
        setIsEdit(false);
        dispatch(setEdit(id,updatedNote));
    }, [setIsEdit, dispatch, updatedNote, id] );

    const onChangeNote = useCallback( (event: ChangeEvent<HTMLInputElement>) => {
        setUpdatedNote(event.target.value);
    }, [setUpdatedNote] );

    const onChangeTag = useCallback( (event: ChangeEvent<HTMLInputElement>) => {
        setUupdatedNewTag(event.target.value);
     }, [setUupdatedNewTag] );

    const onRemove = useCallback( () => {
        dispatch(setRemove(id))
    }, [id, dispatch] );

    const onAddTag = useCallback( () => {
        setIsAdd(true);
    }, [setIsAdd] );

    const onSaveTag = useCallback( () => {
        setIsAdd(false);
        dispatch(setAddTag(id, updatedTag));
    }, [setIsAdd, dispatch, updatedTag, id] );

    return (
        <>
            {!isEdit && (
                <div className="item" id={id}>
                    <div className='item_wrapper'>
                        <p>{note}</p>
                        <div className="item_btns">
                            <button type="button"
                                className="item_btns-edit"
                                onClick={onEdit}
                                >
                                <i className="fas fa-pen"></i>
                            </button>   
                            <button type="button"
                                className="item_btns-remove"
                                onClick={onRemove}
                                >
                                <i className="fas fa-trash"></i>
                            </button>   
                        </div>
                    </div>
                    {!isAdd && (
                        <div className='tag_block'>
                            <p className='item_tag'>{tag}</p>
                            <button onClick={onAddTag}>+</button>
                        </div>
                    )}
                    {isAdd && (
                         <div className="item" id={id}>
                            <input className="item_edit" type="text" value={updatedTag} onChange={onChangeTag} />
                            <button type="button"
                                className="item_btns-save"
                                onClick={onSaveTag}
                                >
                                <i className="fas fa-save"></i>
                            </button>
                        </div>
                    )}
                </div>
            )}
            {isEdit && (
                <div className="item" id={id}>
                    <input className="item_edit" type="text" value={updatedNote} onChange={onChangeNote} />
                    <button type="button"
                        className="item_btns-save"
                        onClick={onSave}
                        >
                        <i className="fas fa-save"></i>
                    </button>
                </div>
            )}
        </>
    )
};

export default Note;