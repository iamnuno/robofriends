import React from 'react';

function Searchbox({ searchChange }) {
	return (
		<div className="pt2 pb3">
			<input
				className="mw-100 dark-grey w-100 w5-ns f5 input-reset ba b--moon-grey ph4 pv3 border-box tc br-pill bg-washed-yellow shadow-1"
				type="search"
				placeholder="Search for robots"
				onChange={searchChange}
			/>
		</div>
	);
}

export default Searchbox;