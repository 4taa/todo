import * as React from 'react';

export default ({children, ...props}) => {
    if (typeof children === 'string') {
		return (
			<h1
				{...props}
				dangerouslySetInnerHTML={{__html: children}}
			/>
		);
	}

	return (
		<h1
			{...props}
		>{children}</h1>
	);
}