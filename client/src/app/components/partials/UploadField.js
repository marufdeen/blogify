import React from 'react';

const UploadField = ({
    label,
    type,
    name,
    value,
    onChange,
    error
}) => {
    const style = { color: 'red', fontSize: '13px' };
    return (
        <div className="col-md-12 form-group"> 
        <label>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} className="form-control" />
            {error ? <i style={style}> {error} </i> : ''}
        </div>
    );
}

export default UploadField;