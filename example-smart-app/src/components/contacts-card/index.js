// Vendors
import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardText,
    CardTitle,
    List,
    ListItem
} from 'react-md';

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