import Character from "./Character";

export default function GridBlock(props) {
  let team;
  if (props.cellType.type === "player") {
    team = props.cellType.data.team;
  }
  let character = props.cellType.type === "player" ? <Character data={props.cellType.data}/> : "";
  return (
    <div
      className={`
        cell 
        ${props.cellType.type === "player" ? "player" : ""} 
        ${props.highlight ? "highlight" : ""} 
        ${props.active ? "active" : ""} 
        ${props.cellType.type === "barrier" ? "barrier" : ""} 
        `}
      onClick={() => props.onCellClick(props.position, props.cellType)}
    >
      {character}
    </div>
  );
}
