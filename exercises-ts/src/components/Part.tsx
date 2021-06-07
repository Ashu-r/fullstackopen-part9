import React from 'react';
import { CoursePart } from '../types';

const assertNever = (value: never): never => {
	throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};

const Part = ({ part }: { part: CoursePart }) => {
	switch (part.type) {
		case 'normal':
			return (
				<p>
					<strong>
						{part.name} {part.exerciseCount}
					</strong>
					<br />
					<em>{part.description}</em>
				</p>
			);

		case 'groupProject':
			return (
				<p>
					<strong>
						{part.name} {part.exerciseCount}
					</strong>
					<div>project exercises {part.groupProjectCount}</div>
				</p>
			);
		case 'submission':
			return (
				<p>
					<strong>
						{part.name} {part.exerciseCount}
					</strong>
					<br />
					<em>{part.description}</em>
					<div>
						Submit to <a href={part.exerciseSubmissionLink}>{part.exerciseSubmissionLink}</a>
					</div>
				</p>
			);
		case 'special':
			return (
				<p>
					<strong>
						{part.name} {part.exerciseCount}
					</strong>
					<br />
					<em>{part.description}</em>
					<div>
						required skills:{' '}
						{part.requirements.map((r) => (
							<span key={r}>{r},</span>
						))}{' '}
					</div>
				</p>
			);
		default:
			return assertNever(part);
	}
};

export default Part;
