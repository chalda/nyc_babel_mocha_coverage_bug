import jsdom from 'jsdom';

/* eslint-disable */
const TEST_HOST = 'http://fake.host';


// This is needed in order to simulate to be in a browser environment.
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>',
    {
        referrer: 'https://example.com/foo',
        url: TEST_HOST
    },
    {
        features: {
            QuerySelector: true
        }
    }
);

global.document = doc;
global.document.location.href = TEST_HOST;
global.window = doc.defaultView;
global.navigator = window.navigator;
global.getComputedStyle = global.window.getComputedStyle;

/* eslint-enable */
