import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
    return (
        <div className="card">
            <div className='card-image'>
                <img src={`../images/${props.img}`}></img>
            </div>
            <div className="card-content">
                <div>
                    <FontAwesomeIcon icon={faLocationDot} className='icon-location'/>
                    <span className='country'>{props.country} </span>
                    <a href={`${props.mapsurl}`} className="maps-link">View on Google Maps</a></div>
                <div className='city'>{props.city}</div>
                <div>
                    <p className='date'>{props.date}</p>
                    <p className='description'>{props.description}</p>
                </div>                
            </div>            
        </div>
    );
}