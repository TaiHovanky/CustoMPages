import React from 'react';
import {
    Card,
    CardTitle,
    CardText
} from 'react-md';

const PatientInfoCard = props => (
    <Card>
        <CardTitle title={props.name} />
        <CardText>
            <p>{props.patientId}</p>
            <p>{props.birthDate}</p>
            <p>{props.gender}</p>
        </CardText>
    </Card>
);

export default PatientInfoCard;