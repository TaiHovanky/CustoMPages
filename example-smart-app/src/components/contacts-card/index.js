// Vendors
import React from 'react';
import {
    Card,
    CardTitle,
    CardText,
    List,
    ListItem
} from 'react-md';

const PatientContactCard = ({ contact }) => (
    <Card>
        <CardTitle title="Contact Info" />
        <CardText>
            <List>
                {contact.map(contact => (
                    <ListItem primaryText={`${contact.system} ${contact.value}`} />
                ))}
            </List>
        </CardText>
    </Card>
);

export default PatientContactCard;