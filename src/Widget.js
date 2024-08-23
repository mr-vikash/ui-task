import React from 'react';

function Widget({ widget, onRemove }) {
  return (
    <div className="card">
      <div className="card-body">
        <button className="btn-close float-end" onClick={onRemove}></button>
        <h5 className="card-title">{widget.title}</h5>
        <p className="card-text">{widget.content}</p>
      </div>
    </div>
  );
}

export default Widget;
