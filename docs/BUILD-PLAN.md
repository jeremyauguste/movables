# Build Plan: Draggable & Sortable Squares in React

## Step-by-Step Plan

### 1. Project Setup
- Initialize a React project (Vite or Create React App)
- Install a drag-and-drop library — **`@dnd-kit/core`** + **`@dnd-kit/sortable`** is the modern recommended choice (lightweight, accessible, no legacy dependencies)

### 2. Define State
- Maintain an ordered array of square IDs/items in component state (e.g., `const [items, setItems] = useState([1, 2, 3, 4, 5])`)
- This array drives the rendered order of squares

### 3. Set Up the DnD Context
- Wrap the app in `<DndContext>` from `@dnd-kit/core`
- Attach an `onDragEnd` handler that uses the `arrayMove` utility to reorder the `items` array when a drop occurs

### 4. Create the Sortable Container
- Use `<SortableContext>` from `@dnd-kit/sortable` wrapping all the squares
- Pass the `items` array and a sorting strategy (e.g., `rectSortingStrategy` for a grid)

### 5. Build the Sortable Square Component
- Create a `<Square>` component that calls `useSortable(id)` hook
- Apply the `transform`, `transition`, and event listeners (`listeners`, `attributes`) returned by the hook to the DOM element
- Style it to look like a square with a fixed size

### 6. Constrain to a Set Area
- Wrap the `<SortableContext>` in a styled container `div` with fixed dimensions, `overflow: hidden`, and a visible border/background
- Use `restrictToParentElement` modifier from `@dnd-kit/modifiers` to prevent dragging outside the bounds

### 7. Add Visual Feedback
- Style the actively dragged square differently (e.g., opacity, scale, shadow) using the `isDragging` boolean from `useSortable`
- Optionally add a drag overlay via `<DragOverlay>` for a ghost element while dragging

### 8. Polish
- Add CSS transitions so squares animate smoothly into their new positions
- Ensure keyboard accessibility (dnd-kit handles this by default)

---

## Key Libraries

| Library | Purpose |
|---|---|
| `@dnd-kit/core` | Core drag-and-drop engine |
| `@dnd-kit/sortable` | Sortable list/grid utilities |
| `@dnd-kit/modifiers` | Constraint helpers (e.g., restrict to parent) |
