import React from 'react';

const SelectField = ({
    name,
    value,
    onChange,
    error,
    options
}) => {
    const style = { color: 'red', fontSize: '13px' };
    const selectoptions = options.map(option => (
        <option key={option.label} value={option.value}>
            {option.label}
        </option>
    ))
    return (
        <div className="col-md-12 form-group"> 
            <select name={name} value={value} onChange={onChange} className="form-control">
            {selectoptions}
            </select>
            {error ? <i style={style}> {error} </i> : ''}
        </div>
    );
}

export default SelectField;