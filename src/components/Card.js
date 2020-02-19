import React from 'react';
import './Card.css';

function Card({id, name, email}) {
	return (
			<article className="bg-light-red dib br3 ma2 pa4-ns mv3 ba b--black-10 shadow-3 bg-animate hover-bg-red">
			  <div className="tc">
			    <img src={`http://robohash.org/${id}`} className="br-100 h4 w4 dib ba b--near-white pa1" alt="This is an avatar" />
			    <h1 className="f4 mb2 dark-grey">{name}</h1>
			    <h2 className="f6 fw4 near-white mt0">{email}</h2>
			  </div>
			</article>
	);
}

export default Card;