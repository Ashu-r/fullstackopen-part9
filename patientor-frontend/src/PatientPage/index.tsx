import React from 'react';
import { useParams } from 'react-router-dom';
import { Icon, Message } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import EntryView from '../PatientListPage/components/EntryView';
import { useStateValue } from '../state';
import { Patient } from '../types';

const PatientPage = () => {
	const [{ patients }] = useStateValue();
	const { id } = useParams<{ id: string }>();
	const currentPatient = Object.values(patients).find((p: Patient) => p.id === id);
	const genderIcon: { [key: string]: SemanticICONS } = { male: 'mars', female: 'venus', other: 'neuter' };
	if (!currentPatient) {
		return (
			<div>
				<Message negative>
					<Message.Header>Error! Please check the id again</Message.Header>
					<p>That patient probably does not exist</p>
				</Message>
			</div>
		);
	}

	return (
		<div>
			<h3>
				{currentPatient.name} <Icon name={genderIcon[currentPatient.gender]} />
			</h3>
			<div>
				ssn: {currentPatient.ssn}
				<br />
				occupation: {currentPatient.occupation}
				<br />
				Date of Birth: {currentPatient.dateOfBirth}
			</div>
			<h3>Entries</h3>
			{currentPatient.entries.map((entry) => (
				<>
					<EntryView entry={entry} key={entry.id} />
					<br />
				</>
			))}
		</div>
	);
};

export default PatientPage;
