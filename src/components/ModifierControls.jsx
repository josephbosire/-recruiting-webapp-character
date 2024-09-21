function ModifierControls({
  onIncrement,
  onDecrement,
  disableIncrement = false,
  disableDecrement = false,
}) {
  return (
    <>
      <button disabled={disableIncrement} onClick={onIncrement}>
        +
      </button>
      <button disabled={disableDecrement} onClick={onDecrement}>
        -
      </button>
    </>
  );
}

export default ModifierControls;
