import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Note from "../note/Note";
import './container.scss';

const Container = () => {
    const { notes } = useSelector( (state: RootState) => state.notes );
    return (
        <div className="container">
            {(notes.length === 0) ? <div>Empty...</div> : null}
            {notes.map( (item) => (
               item.note.length ? <Note key={item.id} id={item.id} note={item.note} tag={item.tag} /> : null
            ) )}
        </div>
    )
};

export default Container;