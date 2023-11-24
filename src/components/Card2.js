import BarChartImage from '../images/bar-chart.svg';
import '../style/Card2.css';

function Card2() {
  return (
     <div className='card2'>
    <div className='row row-a'>
      <img className='image barChartImage' src={BarChartImage} alt='bar_Chart'/>
      <input type='checkbox'></input>
    </div>
    <div className='footer'>
       
    
    <p className='description'>Notify me when any wallets move more than</p>
    <select className="cost">
      <option value="$1000">$1000.00</option>
      <option value="$100">$100.00</option>
      <option value="$10">$10.00</option>
    </select>
    </div>
  </div>
  )
}

export default Card2
