import React, { useState } from 'react';
import Dashboard from './Dashboard';
import initialData from './dashboardData.json';
import NavigationBar from './Navbar'; // Import the NavigationBar

function App() {
  const [categories, setCategories] = useState(initialData.categories);

  const handleAddWidget = (categoryId) => {
    const widgetTitle = prompt('Enter widget title');
    const widgetContent = prompt('Enter widget content');
    const newWidget = {
      id: Date.now(),
      title: widgetTitle,
      content: widgetContent
    };

    setCategories(categories.map(category =>
      category.id === categoryId
        ? { ...category, widgets: [...category.widgets, newWidget] }
        : category
    ));
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    setCategories(categories.map(category =>
      category.id === categoryId
        ? { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) }
        : category
    ));
  };

  return (
    <div>
      <NavigationBar /> {/* Add the NavigationBar component */}
      <div className="container mt-4">
        <h1>Dashboard</h1>
        <Dashboard
          categories={categories}
          onAddWidget={handleAddWidget}
          onRemoveWidget={handleRemoveWidget}
        />
      </div>
    </div>
  );
}

export default App;
