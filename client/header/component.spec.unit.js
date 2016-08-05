import React from 'react';
import { Navbar } from 'react-bootstrap';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import * as ShallowTestUtils from 'react-shallow-testutils';
import Header from './component';

const expect = chai.expect;

function returnShallowRender(component) {
    const shallowRenderer = TestUtils.createRenderer();
    const instance = shallowRenderer.render(component);

    return shallowRenderer.getRenderOutput(instance);
}

describe('header/component', () => {
    function renderInstance() {
        return returnShallowRender(
            <Header/>
        );
    }

    it('should be a function.', () => {
        expect(Header).to.be.a('function');
    });

    it('should render a Navbar.', () => {
        TestUtils.isElementOfType(renderInstance(), Navbar);
    });
});
