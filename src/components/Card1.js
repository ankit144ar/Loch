import Bell2Image from '../images/bell2.svg';
import '../style/Card1.css';

function Card1() {
  return (
    <div className='card1'>
      <div className='row row-a'>
        <img className='image bell2Image' src={Bell2Image} alt='bell_Image'/>
        <button type='button' className='button'>Save</button>
      </div>
      <p className='description'>We’ll be sending notifications to you here</p>
      <input type='text'></input>
    </div>
  )
}

export default Card1 
 