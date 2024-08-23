import React from 'react';
import Widget from './Widget';

function Dashboard({ categories, onAddWidget, onRemoveWidget }) {
  return (
    <div className="row">
      {categories.map(category => (
        <div className="col-md-6 mb-4" key={category.id}>
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5>{category.name}</h5>
            </div>
            <div className="card-body d-flex flex-row justify-content-center align-items-center">
              {category.widgets.length === 0 ? (
                <div className="d-flex justify-content-center align-items-center h-100">
                  <button className="btn btn-primary" onClick={() => onAddWidget(category.id)}>+ Add Widget</button>
                </div>
              ) : (
                <div className="w-100">
                  <div className="row">
                    {category.widgets.map(widget => (
                      <div className="col-md-6 mb-3" key={widget.id}>
                        <Widget widget={widget} onRemove={() => onRemoveWidget(category.id, widget.id)} />
                      </div>
                    ))}
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-primary" onClick={() => onAddWidget(category.id)}>+ Add Widget</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
