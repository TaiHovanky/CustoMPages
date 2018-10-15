// Vendors
import React from 'react';
import { render} from 'react-dom';
import MyComponent from './my-component';
import { onError, onReady } from './utils/get-pt-data';
import { Card, CardTitle } from 'react-md';

// Components
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
        console.log('smart', smart, 'pt', pt, 'fhir', FHIR);
        // Create a patient banner by fetching + rendering demographics
        // smart.patient.read().then(function(pt) {
        //     console.log('smart pt in .then', pt);
        // });
        const fhirResults = async () => {
            console.log('running fhirResults', this);
            const data = await FHIR.oauth2.ready(onReady, onError);
            // console.log('data in await-----', data);
            const onReadyData = await onReady(smart);
            console.log('on ready data', onReadyData);
            this.setState({ data: onReadyData });
            // return onReadyData;
        }
        fhirResults();
        // console.log('fhir results', fhirResults());
    }

    render() {
        return (
            <div>
                <MyComponent />
                <PatientInfoCard
                    birthDate={(this.state.data && this.state.data.dataPt)
                        ? this.state.data.dataPt.birthDate
                        : ''
                    }
                    gender={(this.state.data && this.state.data.dataPt)
                        ? this.state.data.dataPt.gender
                        : ''
                    }
                    name={(this.state.data && this.state.data.dataPt)
                        ? this.state.data.dataPt.name[0]
                        : ''
                    }

                />
                <PatientContactCard
                    telecom={(this.state.data && this.state.data.dataPt)
                        ? this.state.data.dataPt.telecom
                        : []
                    }
                />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));