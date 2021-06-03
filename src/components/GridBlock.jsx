export default function GridBlock(props) {
  let team;
  if (props.cellType.type === "player") {
    team = props.cellType.data.team;
  }
  return (
    <div
      className={`
        cell 
        ${props.cellType.type === "player" ? `player ${team}` : ""} 
        ${props.highlight ? "highlight" : ""} 
        ${props.active ? "active" : ""} 
        ${props.cellType.type === "barrier" ? "barrier" : ""} 
        `}
      onClick={() => props.onCellClick(props.position, props.cellType)}
    >
      {props.cellType.type === "player" ? props.cellType.data.name : ""}
    </div>
  );
}
