import React from 'react';
interface courseParts {
	name: string;
	exerciseCount: number;
}

const Content = ({ parts }: { parts: courseParts[] }) => {
	return (
		<div>
			{parts.map((p) => (
				<p key={p.name}>
					{p.name} {p.exerciseCount}
				</p>
			))}
		</div>
	);
};

export default Content;
