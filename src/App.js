import { useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import Square from './Square';
import './App.css';

function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [activeId, setActiveId] = useState(null);

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    setActiveId(null);
    if (over && active.id !== over.id) {
      setItems((prev) => {
        const oldIndex = prev.indexOf(active.id);
        const newIndex = prev.indexOf(over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} modifiers={[restrictToParentElement]}>
      <div className="App">
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <div className="grid">
            {items.map((id) => (
              <Square key={id} id={id} />
            ))}
          </div>
        </SortableContext>
        <DragOverlay>
          {activeId ? (
            <div className="square square--overlay">{activeId}</div>
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}

export default App;
