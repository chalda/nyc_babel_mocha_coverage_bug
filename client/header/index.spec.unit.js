import _ from 'lodash';
import index from './index';
import chai from 'chai';

const expect = chai.expect;


describe('header/index', () => {
    it('should export known attributes.', () => {
        const clone = _.clone(index);

        expect(clone).to.have.property('Component').to.be.a('function');
        delete clone.Component;

        expect(clone).to.deep.equal({});
    });
});
