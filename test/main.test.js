const { expect } = require('chai');
const convertToJpnName = require('../src/index.js');

describe('convertToJpnName', () => {
  it('should pass iso3166 code as argument', () => {
    const response = convertToJpnName('JP');
    expect(response).to.equal('日本');
  });

  it('should throw error when iso3166 code is not passed', () => {
    expect(() => convertToJpnName('')).to.throw();
    expect(() => convertToJpnName('test')).to.throw();
    expect(() => convertToJpnName(123)).to.throw();
    expect(() => convertToJpnName(null)).to.throw();
    expect(() => convertToJpnName()).to.throw();
    expect(() => convertToJpnName([])).to.throw();
    expect(() => convertToJpnName({})).to.throw();
  });
});
