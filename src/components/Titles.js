import React from 'react';

// do we have any state in there.No for this reason we can use const function

const Titles = props => (
    <div>
        <h1 className="title-container__title">Weather Finder</h1>
        <h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
    </div>
);


// class Titles extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Weather Finder</h1>
//                 <p>Find out temperature, conditions and more...</p>
//             </div>
//         );
//     }
// }
export default Titles;