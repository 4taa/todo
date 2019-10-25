import * as React from 'react';

export default ({children = null, ...props}) => {
	if (typeof children === 'string') {
		return (
			<div
				{...props}
				dangerouslySetInnerHTML={{__html: children}}
			/>
		);
	}

	return (
		<div
			{...props}
		>{children}</div>
	);
};
