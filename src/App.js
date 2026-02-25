import { useState, useRef } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import Square from './Square';
import './App.css';

function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [activeId, setActiveId] = useState(null);
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const dropAnimation = prefersReducedMotion.current ? null : undefined;

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

  function handleDragCancel() {
    setActiveId(null);
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragCancel={handleDragCancel} modifiers={[restrictToParentElement]}>
      <div className="App">
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <div className="grid">
            {items.map((id) => (
              <Square key={id} id={id} />
            ))}
          </div>
        </SortableContext>
        <DragOverlay dropAnimation={dropAnimation}>
          {activeId ? (
            <div className="square square--overlay">{activeId}</div>
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}

export default App;
