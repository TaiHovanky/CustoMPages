// Vendors
import React from 'react';
import {
    Card,
    CardTitle,
    CardText,
    List,
    ListItem
} from 'react-md';

const PatientContactCard = ({ address, telecom }) => (
    <Card id="patient-contact-card">
        <CardTitle title="Contact Info" />
        <CardText>
            <List>
                <ListItem primaryText={address && address.length > 0 ? `${address[0].line} ${address[0].city}, ${address[0].state}` : '' } />
                {telecom.map(contact => (
                    <ListItem primaryText={`${contact.system} ${contact.value}`} />
                ))}
            </List>
        </CardText>
    </Card>
);

export default PatientContactCard;