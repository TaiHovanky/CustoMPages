// Vendors
import React from 'react';
import {
    Card,
    CardTitle,
    List,
    ListItem
} from 'react-md';

const MedicationList = ({ medications }) => (
    <Card id="medications">
        <CardTitle
            id="medications__title"
            title="Medication Orders"
        />

        <List id="medications__list">
            {medications.map((medication, index) => {
                let {
                    dosageInstruction,
                    medicationCodeableConcept
                } = medication;

                return (
                    <ListItem
                        primaryText={
                            medicationCodeableConcept
                                ? medicationCodeableConcept.text
                                : ''
                        }
                        secondaryText={
                            dosageInstruction && dosageInstruction.length > 0
                                ? dosageInstruction[0].text
                                : ''
                        }
                    />
                );
            })}
        </List>
    </Card>
);

export default MedicationList;
