import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAdd, setFilter } from '../../store/actions/actionCreators';

import './filter.scss';

const Filter = () => {
    
    const dispatch = useDispatch();
    const [newFitler, setNewFilter] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewFilter(e.target.value);
    }

    const handleFilter = () => {
        dispatch(setFilter(newFitler));
        setNewFilter('');
    }

    return (
        <div className='filter'>
            <input className='filter_text' placeholder='Enter tag for search' value={newFitler} onChange={handleChange} />
            <button className="filter_btn" onClick={handleFilter} >Search</button>
        </div>
    )
};

export default Filter;
