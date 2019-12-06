import React from 'react';

//improve project 1 -- step 2
//if you are only returning one single argument in an arrow function you can delete parentheses
const Weather = props => (
    <div className="weather__info">
        {
            props.city && props.country && <p className="weather__key">Location:
            <span className="weather__value"> {props.city}, {props.country}</span>
            </p>
        }
        {
            props.temperature && <p className="weather__key">Temperature:
            <span  className="weather__value"> {props.temperature}</span>
            </p>
        }
        {
            props.humidity && <p className="weather__key">humidity: <span className="weather__value"> {props.humidity}</span>
            </p>
        }
        {
            props.description && <p className="weather__key">Conditions: <span className="weather__value"> {props.description}</span>
            </p>
        }
        {
            props.error && <p className="weather__error">*{props.error}</p>
        }
    </div>
);

export default Weather;

//Class components step 1
// class Weather extends React.Component {
//     render() {
//         return (
//             <div>

//                 {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
//                 {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//                 {this.props.humidity && <p>humidity: {this.props.humidity}</p>}
//                 {this.props.description && <p>Conditions: {this.props.description}</p>}
//                 {this.props.error && <p>{this.props.error}</p>}
//             </div>
//         );
//     }
// }

//improve project 1 -- step 2
//it's not work beause.when delete class we dont need 'this'.Fix:delete 'this' keywords
// const Weather = (props) => {
//     return (
//         <div>

//             {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
//             {props.temperature && <p>Temperature: {props.temperature}</p>}
//             {props.humidity && <p>humidity: {props.humidity}</p>}
//             {props.description && <p>Conditions: {props.description}</p>}
//             {props.error && <p>{props.error}</p>}
//         </div>
//     );
// }