// Vendors
import React from 'react';
import {
    Card,
    CardTitle,
    CardText,
    List,
    ListItem
} from 'react-md';
import PropTypes from 'prop-types';

const PatientContactCard = ({ address, telecom }) => (
    <Card id="patient-contact-card">
        <CardTitle title="Contact Info" />
        <CardText>
            <List>
                <ListItem primaryText={address && address.length > 0 ? `${address[0].text}` : '' } />
                {telecom.map(contact => (
                    <ListItem primaryText={`${contact.system} ${contact.value}`} />
                ))}
            </List>
        </CardText>
    </Card>
);

PatientContactCard.propTypes = {
    address: PropTypes.array,
    telecom: PropTypes.array
};

PatientContactCard.defaultProps = {
    address: [],
    telecom: []
}

export default PatientContactCard;