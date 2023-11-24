import clockImage from '../images/clock.svg';
import '../style/Card3.css';

function Card3() {
  return (
    <div className='card3'>
    <div className='row row-a'>
      <img className='image clockImage' src={clockImage} alt='bar_Chart'/>
      <input type='checkbox'></input>
    </div>
    <div className='footer'>
       
    
    <p className='description'>Notify me when any wallet dormant for</p>
    <select className="cost">
      <option value="30 days">&gt; 30 days</option>
      <option value="20 days">&gt; 20 days</option>
      <option value="10 days">&gt; 10 days</option>
    </select>
    <p className='description'>becomes active</p>
    </div>
  </div>
  )
}

export default Card3
