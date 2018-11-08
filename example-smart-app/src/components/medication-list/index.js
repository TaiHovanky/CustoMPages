// Vendors
import React from 'react';
import {
    Card,
    CardTitle,
    List,
    ListItem
} from 'react-md';

const MedicationList = ({ medications }) => (
    <Card>
        <CardTitle title="Medication Orders" />

        <List>
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
