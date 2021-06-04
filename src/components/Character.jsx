import tango from "../assets/characters/tango.png";
import kilo from "../assets/characters/kilo.png";
import victor from "../assets/characters/victor.png";
import xray from "../assets/characters/xray.png";
import lima from "../assets/characters/lima.png";

export default function Character(props) {
  return (
    <div className='imgContainer'>
      <div></div>
      <img src={selectCharacter(props.data.name)} alt='' />
    </div>
  );
}

function selectCharacter(name) {
  let link;
  name = name.toUpperCase();
  switch (name) {
    case "KILO":
      link = kilo;
      break;
    case "VICTOR":
      link = victor;
      break;
    case "XRAY":
      link = xray;
      break;
    case "LIMA":
      link = lima;
      break;

    default:
      link = tango;
      break;
  }
  return link;
}
