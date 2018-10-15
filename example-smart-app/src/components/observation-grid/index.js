// Vendors
import React from 'react';
import {
    DataTable,
    TableHeader,
    TableBody,
    TableRow,
    TableColumn
} from 'react-md';

const ObservationTable = ({ observations }) => (
    <DataTable plain>
        <TableHeader>
            <TableRow>
                <TableColumn>Category</TableColumn>
                <TableColumn>Measurement Type</TableColumn>
                <TableColumn>Effective Date/Time</TableColumn>
                <TableColumn>Interpretation</TableColumn>
                <TableColumn>Reference Range</TableColumn>
                <TableColumn>Value</TableColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            {observations.map((dataItem, i) => (
                <TableRow key={i}>
                <TableColumn>{dataItem.category ? dataItem.category.text : ''}</TableColumn>
                <TableColumn>{dataItem.code ? dataItem.code.text : ''}</TableColumn>
                <TableColumn>{dataItem.effectiveDateTime || ''}</TableColumn>
                <TableColumn>{dataItem.interpretation ? dataItem.interpretation.text : ''}</TableColumn>
                <TableColumn>{dataItem.referenceRange ? dataItem.referenceRange[0].text : ''}</TableColumn>
                <TableColumn>{dataItem.valueQuantity ? `${dataItem.valueQuantity.value} ${dataItem.valueQuantity.unit}` : ''}</TableColumn>
                </TableRow>
            ))}
        </TableBody>
    </DataTable>
);

export default ObservationTable;