import React from 'react';
import { Icon, SemanticCOLORS } from 'semantic-ui-react';
import { Entry } from '../../types';

function assertNever(value: never): never {
	throw new Error(`Unhandled member: ${JSON.stringify(value)}`);
}

const EntryView = ({ entry }: { entry: Entry }) => {
	switch (entry.type) {
		case 'HealthCheck':
			const healthIcon: { [key: string]: SemanticCOLORS } = {
				'0': 'green',
				'1': 'blue',
				'2': 'yellow',
				'3': 'red',
			};
			return (
				<div>
					<div>
						{entry.date} <em>{entry.description}</em>
					</div>
					<div>Specialist: {entry.specialist}</div>
					<div>
						{entry.diagnosisCodes ? (
							<ul>
								{entry.diagnosisCodes.map((code) => (
									<li key={code}>{code}</li>
								))}
							</ul>
						) : null}
					</div>
					<div>
						<Icon name='heartbeat' color={healthIcon[entry.healthCheckRating]} />
					</div>
				</div>
			);
		case 'Hospital':
			return (
				<div>
					<div>
						{entry.date} <em>{entry.description}</em>
					</div>
					<div>Specialist: {entry.specialist}</div>
					<div>
						Discharge: {entry.discharge.date} <em>{entry.discharge.criteria}</em>
					</div>
					<div>
						{entry.diagnosisCodes ? (
							<ul>
								{entry.diagnosisCodes.map((code) => (
									<li key={code}>{code}</li>
								))}
							</ul>
						) : null}
					</div>
				</div>
			);
		case 'OccupationalHealthcare':
			return (
				<div>
					<div>
						{entry.date} <em>{entry.description}</em>
					</div>
					<div>Specialist: {entry.specialist}</div>
					<div>Employer name: {entry.employerName}</div>
					<div>Sick Leave: {entry.sickLeave ? `From ${entry.sickLeave.startDate} to ${entry.sickLeave.endDate}` : null}</div>
					<div>
						{entry.diagnosisCodes ? (
							<ul>
								{entry.diagnosisCodes.map((code) => (
									<li key={code}>{code}</li>
								))}
							</ul>
						) : null}
					</div>
				</div>
			);
		default:
			return assertNever(entry);
	}
};

export default EntryView;
