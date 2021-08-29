import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SampleRenderInput from './SampleRenderInput';

afterEach(() => cleanup());

describe('Rendering', () => {
  it('Should render default label value', () => {
    render(<SampleRenderInput />);
    expect(screen.getByText('labelです')).toBeTruthy();
  });

  it('Should render all the elements correctly', () => {
    render(<SampleRenderInput inputLabel={'testのlabel'} />);
    expect(screen.getByText('testのlabel')).toBeTruthy();
    expect(screen.getByTestId('label')).toBeTruthy();
    expect(screen.getByRole('button')).toBeTruthy();
    expect(screen.getByRole('button')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter')).toBeTruthy();
  });
});

describe('Input form onChange event', () => {
  it('Should update input value correctly', () => {
    render(<SampleRenderInput inputLabel={'testのlabel'} />);
    const inputValue = screen.getByPlaceholderText('Enter') as HTMLInputElement;
    userEvent.type(inputValue, 'test');
    expect(inputValue.value).toBe('test');
  });
});

describe('Console button conditionally triggered', () => {
  it('Should not trigger output function', () => {
    const outputConsole = jest.fn();
    render(<SampleRenderInput inputLabel={'testのlabel'} outputConsole={outputConsole} />);
    userEvent.click(screen.getByRole('button'));
    expect(outputConsole).not.toHaveBeenCalled();
  });
  it('Should trigger output function', () => {
    const outputConsole = jest.fn();
    render(<SampleRenderInput inputLabel={'testのlabel'} outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText('Enter') as HTMLInputElement;
    userEvent.type(inputValue, 'test');
    userEvent.click(screen.getByRole('button'));
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
