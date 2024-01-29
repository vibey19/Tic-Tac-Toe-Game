export default function GameOver({ winner, reset }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Draw!</p>}
      <p>
        <button onClick={reset}>Rematch!</button>
      </p>
    </div>
  );
}
