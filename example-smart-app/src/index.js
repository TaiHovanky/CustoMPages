import React from 'react';
import { render} from 'react-dom';
import MyComponent from './my-component';
import { onError, onReady } from './utils/get-pt-data';

console.log('hello world');

const App = () => {
    console.log('fhir=======', FHIR);
    const fhirResults = async () => {
        const data = await FHIR.oauth2.ready(onReady, onError);
        console.log('data in await-----', data);
    } 
    console.log('fhir results', fhirResults);
    return (
        <div>
            <MyComponent />
        </div>
    );
}

render(<App />, document.getElementById('root'));