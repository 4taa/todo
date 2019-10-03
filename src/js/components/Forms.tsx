import * as React from 'react';

export default ({children, ...props}) => {
    if (typeof children === 'string') {
		return (
			<form
				{...props}
				dangerouslySetInnerHTML={{__html: children}}
			/>
		);
	}

	return (
		<form
			{...props}
		>{children}</form>
	);
}