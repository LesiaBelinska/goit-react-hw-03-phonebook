import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

import s from "./Filter.module.css";

const filterInputId = nanoid();

const Filter = ({ value, onChange }) => {
    return (
        <div className={s.filter}>
            <label htmlFor={filterInputId} className={s.label}>Find contacts by name</label>
            <input className={s.input} type="text"
                id={filterInputId}
                value={value}
                onChange={onChange}
            />
        </div>

    );
};

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}