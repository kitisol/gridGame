import Character from "./Character";
import Barrier from "./Barrier";

export default function GridBlock(props) {
  let team;
  if (props.cellType.type === "player") {
    team = props.cellType.data.team;
  }
  let cellContent = props.cellType.type === "player" ? <Character data={props.cellType.data}/> : props.cellType.type === "barrier" ? <Barrier date={props.cellType.data}/> : ''
  return (
    <div
      className={`
        cell 
        ${props.cellType.type === "player" ? "player" : ""} 
        ${props.highlight ? "highlight" : ""} 
        ${props.active ? "active" : ""} 
        `}
      onClick={() => props.onCellClick(props.position, props.cellType)}
    >
      {cellContent}
    </div>
  );
}
