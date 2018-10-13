import React from 'react';
import {
    Card,
    CardTitle,
    CardText,
    List,
    ListItem
} from 'react-md';

const PatientContactCard = props => (
    <Card>
        <CardTitle title="Contact Info" />
        <CardText>
            <List>
                {props.telecom.map(contact => (
                    <ListItem primaryText={`${contact.system} ${contact.value}`} />
                ))}
            </List>
        </CardText>
    </Card>
);

export default PatientContactCard;