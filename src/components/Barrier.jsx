import barrier from "../assets/barrier.png";

export default function Character(props) {
  return (
    <div className='imgContainer'>
      <img src={barrier} alt='barrier' className="barrier" />
    </div>
  );
}
