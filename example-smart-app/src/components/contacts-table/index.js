// Vendors
import React from 'react';
import {
    Card,
    CardTitle,
    DataTable,
    TableHeader,
    TableBody,
    TableRow,
    TableColumn
} from 'react-md';

const ContactsTable = ({ contact }) => (
    <Card>
        <CardTitle title="Patient Contacts" />
        <DataTable>
            <TableHeader>
                <TableRow>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Gender</TableColumn>
                    <TableColumn>Relationship</TableColumn>
                    <TableColumn>Main Mode of Contact</TableColumn>
                    <TableColumn>Telecom</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {contact.map((dataItem, i) => (
                    <TableRow key={i}>
                    <TableColumn>{dataItem.name ? dataItem.name.text : ''}</TableColumn>
                    <TableColumn>{dataItem.gender ? dataItem.gender : ''}</TableColumn>
                    <TableColumn>{dataItem.relationship && dataItem.relationship.length > 0 ? dataItem.relationship[0].text : ''}</TableColumn>
                    <TableColumn>{dataItem.telecom && dataItem.telecom.length > 0 ? `${dataItem.telecom[0].system}, ${dataItem.telecom[0].use}` : ''}</TableColumn>
                    <TableColumn>{dataItem.telecom && dataItem.telecom.length > 0 ? dataItem.telecom[0].value : ''}</TableColumn>
                    </TableRow>
                ))}
            </TableBody>
        </DataTable>
    </Card>
);

export default ContactsTable;