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

const PatientContactCard = ({ contact }) => (
    <Card>
        <CardTitle title="Contact Info" />
        <CardText>
            <List>
                {contact.map(contactItem => (
                    <ListItem primaryText={`${contactItem.system} ${contactItem.value}`} />
                ))}
            </List>
        </CardText>
    </Card>
);

PatientContactCard.propTypes = {
    contact: PropTypes.array
};

PatientContactCard.defaultProps = {
    contact: []
};

export default PatientContactCard;