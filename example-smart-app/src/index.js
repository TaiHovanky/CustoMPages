// Vendors
import React from 'react';
import { render} from 'react-dom';
import { onError, onReady } from './utils/get-pt-data';
import { Card, CardTitle } from 'react-md';

// Components
import ObservationTable from './components/observation-table';
import PatientContactCard from './components/patient-contact-card';
import PatientInfoCard from './components/patient-info-card';
import ContactsTable from './components/contacts-table';
import './style.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        const demo = {
            serviceUrl: "https://r2.smarthealthit.org"
            // patientId: "smart-1137192"
        };

        var smart = FHIR.client(demo),
        pt = smart.patient;
        // Create a patient banner by fetching + rendering demographics
        const callback = (patientData) => {
            this.setState({
                data: patientData
            }, () => { console.log('this state after set', this.state.data)});
        };
        const fhirResults = async () => {
            const data = await FHIR.oauth2.ready((smart) => {
                onReady(smart, callback);
            }, onError);
        }
        fhirResults();
    }

    render() {
        const { data } = this.state;
        if (data && data.dataPt && data.dataObv) {
            const {
                address,
                birthDate,
                careProvider,
                communication,
                contact,
                gender,
                id,
                name,
                telecom
            } = data.dataPt;
            const { dataObv } = data;

            return (
                <div id="patient-info">
                    <h1 id="patient-info__header">Observation MPage</h1>
                    <div id="patient-info__cards">
                        <PatientInfoCard
                            birthDate={birthDate}
                            careProvider={careProvider}
                            communication={communication}
                            gender={gender}
                            id={id}
                            name={name[0]}
                        />
                        <PatientContactCard
                            address={address}
                            telecom={telecom}
                        />
                        <ContactsTable contact={contact} />
                    </div>
                    <ObservationTable observations={dataObv} />
                </div>
            );
        }

        return <div>Loading observation data</div>;
    }
}

render(<App />, document.getElementById('root'));