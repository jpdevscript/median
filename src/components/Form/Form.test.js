import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Form from './Form.Index';
import Adapter from 'enzyme-adapter-react-16';
import { checkValidation } from './helper';

Enzyme.configure({ adapter: new Adapter() });

let [onInputValueChange, onInputValueSubmit, onDisplayError] = new Array(3).fill(jest.fn());

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    inputNumber: '10',
    data: '[3, 7]',
    error: 'Please correct value',
    onInputValueChange: onInputValueChange,
    onInputValueSubmit: onInputValueSubmit,
    onDisplayError: onDisplayError
  }
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<Form {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Shallow rendered Form', () => {

  it('should render correctly in "debug" mode', () => {
    const wrapper = shallow(<Form debug/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a Form with the details of input-fields', () => {

    const { enzymeWrapper } = shallowSetup();
    const formLabel = 'Find Median for set of Prime-Numbers';

    expect(enzymeWrapper.find('input').at(0).hasClass('input-control')).toBe(true);
    expect(enzymeWrapper.find('input.input-button').text()).toBe('');
    expect(enzymeWrapper.containsMatchingElement(<div>{formLabel}</div>)).toBe(true);
  });
});

describe('checkValidation', () => {

  /* for true */

  it('should return TRUE when value === number', () => {
    const result = checkValidation(44);
    expect(result).toBe(true);
  });

  it('should return TRUE when value !== zero', () => {
    const result = checkValidation(0);
    expect(result).toBe(false);
  });

  /* for false */

  it('should return FALSE when value === object {val : number}', () => {
    const result = checkValidation({
      val: 55,
    });
    expect(result).toBe(false);
  });

  it('should return FALSE when value === empty object {}', () => {
    const result = checkValidation({});
    expect(result).toBe(false);
  });

  it('should return FALSE when value === array []', () => {
    const result = checkValidation([]);
    expect(result).toBe(false);
  });

  it('should return FALSE when value === null', () => {
    const result = checkValidation(null);
    expect(result).toBe(false);
  });

  it('should return FALSE when whitespace characters', () => {
    const result = checkValidation('\n\t');
    expect(result).toBe(false);
  });

  it('should return FALSE when value === undefined', () => {
    const result = checkValidation(undefined);
    expect(result).toBe(false);
  });

  it('should return FALSE when value === 1', () => {
    const result = checkValidation(1);
    expect(result).toBe(false);
  });

  it('should return FALSE when value === 1', () => {
    const result = checkValidation(1);
    expect(result).toBe(false);
  });
});