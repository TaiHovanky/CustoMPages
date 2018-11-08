// Vendors
import React from 'react';
import {
    Card,
    CardTitle,
    CardText
} from 'react-md';
import PropTypes from 'prop-types';

const PatientInfoCard = ({
    birthDate,
    careProvider,
    communication,
    gender,
    id,
    name
}) => (
    <Card id="patient-info-card">
        <CardTitle
            title={
                `${name ? name.family[0] : ''}, ${name ? name.given[0] : ''}`
            }
        />
        <CardText>
            <p>Encounter: {id}</p>
            <p>Birthdate: {birthDate}</p>
            <p>Gender: {gender}</p>
            <p>Language: {
                communication.length > 0
                    ? communication[0].language.text
                    : ''
                }
            </p>
            <p>Provider: {
                careProvider.length > 0
                    ? `${careProvider[0].reference} - ${careProvider[0].display}`
                    : ''
                }
            </p>
        </CardText>
    </Card>
);

PatientInfoCard.propTypes = {
    birthDate: PropTypes.string,
    careProvider: PropTypes.array,
    communication: PropTypes.array,
    gender: PropTypes.string,
    id: PropTypes.number
};

PatientInfoCard.defaultProps = {
    birthDate: '',
    careProvider: [],
    communication: [],
    gender: '',
    id: null
}

export default PatientInfoCard;