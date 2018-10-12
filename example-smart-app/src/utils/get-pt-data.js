import { setTimeout } from "timers";

const getPtData = () => {
    const ptDataPromise = new Promise((resolve, reject) => {
        resolve(data);
    });

};

export const onError = () => {
    console.log('error');
    return;
}

export const onReady = (smart) => {
    console.log('smart', smart);
    if (smart.hasOwnProperty('patient')) {
        let patient = smart.patient;
        const pt = async () => {
            console.log('running pt');
            const ptData = await patient.read();
            console.log('pt data in async await', ptData);
            return ptData;
        }
        const obv = async () => {
            console.log('running obv');
            const obvData = await smart.patient.api.fetchAll({
                type: 'Observation',
                query: {
                    code: {
                        $or: ['http://loinc.org|8302-2', 'http://loinc.org|8462-4',
                        'http://loinc.org|8480-6', 'http://loinc.org|2085-9',
                        'http://loinc.org|2089-1', 'http://loinc.org|55284-4']
                    }
                }
            });
            console.log('obv data in async await', obvData);
            return obvData;
        }
        // const dataPt = pt();
        // const dataObv = obv();

        const getData = async () => {
            console.log('about to getdata');
            const dataPt = await pt();
            const dataObv = await obv();

            return {
                dataPt,
                dataObv
            };
        }

        return getData().then(data => {
            console.log('then data ==========', data);
            return data;
        });

    } else {
        onError();
    }
};
