import React from 'react';

const TextArea = ({
    name,
    value,
    placeholder,
    onChange,
    error
}) => {
    const style = { color: 'red', fontSize: '13px' };
    return (
        <div className="col-md-12 form-group"> 
            <textarea name={name} value={value} placeholder={placeholder} onChange={onChange} className="form-control" />
            {error ? <i style={style}> {error} </i> : ''}
        </div>
    );
}

export default TextArea;