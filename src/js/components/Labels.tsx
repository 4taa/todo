import * as React from 'react';

export default ({children, ...props}) => {
    if (typeof children === 'string') {
		return (
			<label
				{...props}
				dangerouslySetInnerHTML={{__html: children}}
			/>
		);
	}

	return (
		<label
			{...props}
		>{children}</label>
	);
}