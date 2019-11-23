import * as React from 'react';

export default ({children, ...props}) => {
    if (typeof children === 'string') {
		return (
			<section
				{...props}
				dangerouslySetInnerHTML={{__html: children}}
			/>
		);
	}

	return (
		<section
			{...props}
		>{children}</section>
	);
}