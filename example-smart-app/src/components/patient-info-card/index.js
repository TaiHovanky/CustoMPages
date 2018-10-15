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
            <p>MRN: {props.id}</p>
            <p>Birthdate: {props.birthDate}</p>
            <p>Gender: {props.gender}</p>
        </CardText>
    </Card>
);

export default PatientInfoCard;