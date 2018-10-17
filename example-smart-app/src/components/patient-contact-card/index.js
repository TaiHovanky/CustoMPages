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
    <Card>
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

export default PatientContactCard;