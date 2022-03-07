import pin from "../images/pin.png"

export default function Card(props) {
    return (
    <div className="card-container">
        <div className="card">
            <img className="card-image" src={props.location.imageUrl} alt={`${props.location.location}`}/>    
            <div className="card-section">
                <div className="card-metadata">
                    <h6 className="card-location">
                        <img className="card-location-pin-img" src={pin} alt="Pin Vector" />
                        {props.location.location}
                    </h6>
                    <a className="card-link" href={props.location.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card-data">
                    <h1 className="card-title">{props.location.title}</h1>
                    <h6 className="card-timeframe">{props.location.startDate} - {props.location.endDate}</h6>
                    <p className="card-description">{props.location.description}</p>
                </div>
            </div>
        </div> 
    </div>
    )
}