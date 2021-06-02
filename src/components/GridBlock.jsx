export default function GridBlock(props) {
  return (
    <div
      className={`cell ${props.active ? 'active' : ''} ${
        props.highlight && !props.blocker ? 'highlight' : ''
      } ${props.barrier ? 'barrier' : ''}`}
      onClick={() => props.onCellClick(props.position)}
    >
      {props.value}
    </div>
  );
}
