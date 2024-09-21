function ModifierControls({ onIncrement, onDecrement }) {
  return (
    <>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
}

export default ModifierControls;
