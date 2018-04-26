import assert from 'assert';
import React from 'react';
import {shallow} from 'enzyme';
import Well from '../../src/Well';

describe('Well', () => {
  it('supports additional classNames', () => {
    const tree = shallow(<Well className="myClass">Testing</Well>);
    assert.equal(tree.prop('className'), 'spectrum-Well myClass');
  });

  it('supports additional properties', () => {
    const tree = shallow(<Well aria-foo>My Well</Well>);
    assert.equal(tree.prop('aria-foo'), true);
  });

  it('supports children', () => {
    const tree = shallow(<Well>My Well</Well>);
    assert.equal(tree.childAt(0).text(), 'My Well');
  });
});
