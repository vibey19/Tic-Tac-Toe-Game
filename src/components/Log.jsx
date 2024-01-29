export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, idx) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} placed on {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
