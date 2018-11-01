// Vendors
import React from 'react';
import { render} from 'react-dom';
import { onError, onReady } from './utils/get-pt-data';
import { Card, CardTitle } from 'react-md';

// Components
import ObservationTable from './components/observation-table';
import PatientContactCard from './components/patient-contact-card';
import PatientInfoCard from './components/patient-info-card';
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
            });
        };
        const fhirResults = async () => {
            const data = await FHIR.oauth2.ready((smart) => {
                onReady(smart, callback);
            }, onError);
        }
        fhirResults();
    }

    render() {
        if (this.state.data && this.state.data.dataPt && this.state.data.dataObv) {
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
            } = this.state.data.dataPt;
            const { dataObv } = this.state.data;

            return (
                <div>
                    <h1>Observation MPage</h1>
                    <div id="patient-info">
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
                    </div>
                    <ObservationTable observations={dataObv} />
                </div>
            );
        }

        return <div>Loading observation data</div>;
    }
}

render(<App />, document.getElementById('root'));