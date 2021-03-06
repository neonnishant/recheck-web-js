import { isNonEmptyTextNode } from '../src/script';
import { expect } from 'chai';
import 'mocha';
import * as jsdom from 'jsdom';
const { JSDOM } = jsdom;
const { document } = new JSDOM(`...`).window;

describe('isNonEmptyTextNode', () => {
  it('should return true if element contain text', () => {
    const node = document.createTextNode('Hello world');
    const result = isNonEmptyTextNode(node);
    expect(result).to.equal(true);
  });

  it('should return false if element without text', () => {
    const node = document.createTextNode('');
    const result = isNonEmptyTextNode(node);
    expect(result).to.equal(false);
  });

  it('should return false if element is empty', () => {
    const node = document.createElement('div');
    const result = isNonEmptyTextNode(node);
    expect(result).to.equal(false);
  });
});
