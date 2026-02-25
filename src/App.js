import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import './App.css';

function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((prev) => {
        const oldIndex = prev.indexOf(active.id);
        const newIndex = prev.indexOf(over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="App">
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <p>{items.join(', ')}</p>
        </SortableContext>
      </div>
    </DndContext>
  );
}

export default App;
