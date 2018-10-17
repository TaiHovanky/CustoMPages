// Vendors
import React from 'react';
import {
    Card,
    CardTitle,
    CardText
} from 'react-md';

const PatientInfoCard = props => (
    <Card>
        <CardTitle
            title={
                `${props.name ? props.name.family[0] : ''}, ${props.name ? props.name.given[0] : ''}`
            }
        />
        <CardText>
            <p>Encounter: {props.id}</p>
            <p>Birthdate: {props.birthDate}</p>
            <p>Gender: {props.gender}</p>
            <p>Language: {props.communication && props.communication.length > 0 ? props.communication[0].language.text : ''}</p>
            <p>Provider: {props.careProvider && props.careProvider.length > 0 ? `${props.careProvider[0].reference} - ${props.careProvider[0].display}` : ''}</p>
        </CardText>
    </Card>
);

export default PatientInfoCard;