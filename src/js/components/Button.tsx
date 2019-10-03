import * as React from 'react';

export default ({children, ...props}) => {
    if (typeof children === 'string') {
		return (
			<button
				{...props}
				dangerouslySetInnerHTML={{__html: children}}
			/>
		);
	}

	return (
		<button
			{...props}
		>{children}</button>
	);
}
