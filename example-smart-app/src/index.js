import React from 'react';
import { render} from 'react-dom';
import MyComponent from './my-component';
import { onError, onReady } from './utils/get-pt-data';
import { Card, CardTitle } from 'react-md';
import './style.scss';
console.log('hello world');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        const demo = {
            serviceUrl: "https://r2.smarthealthit.org",
            patientId: "smart-1137192"
        };
        console.log('demo-----', demo);
        var smart = FHIR.client(demo),
        pt = smart.patient;

        // Create a patient banner by fetching + rendering demographics
        smart.patient.read().then(function(pt) {
            console.log('smart pt in .then', pt);
        });
        const fhirResults = async () => {
            console.log('running fhirResults');
            const data = await FHIR.oauth2.ready(onReady, onError);
            // console.log('data in await-----', data);
            const onReadyData = await onReady(smart);
            console.log('on ready data', onReadyData);
            return onReadyData;
        }
        // fhirResults();
        console.log('fhir results', fhirResults());
    }

    render() {
        return (
            <div>
                <MyComponent />
                <Card>
                    <CardTitle title="patient data" />
                </Card>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));