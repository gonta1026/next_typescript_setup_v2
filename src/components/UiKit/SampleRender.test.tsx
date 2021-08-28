import React from 'react';
import { render, screen } from '@testing-library/react';
import SampleRender from './SampleRender';

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    render(<SampleRender />);
    //screen.debug();
    //https://github.com/A11yance/aria-query#elements-to-roles
    //screen.debug(screen.getByRole("heading"));
    //https://jestjs.io/docs/en/expect
    expect(screen.getByRole('heading')).toBeTruthy();
    expect(screen.getByText('React Testing Library Lesson')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
    expect(screen.getAllByRole('button')[0]).toBeTruthy();
    expect(screen.getAllByRole('button')[1]).toBeTruthy();
    expect(screen.getByText('Udemy')).toBeTruthy();

    expect(screen.queryByText('Udeeeemy')).toBeNull();
    // data-testidがのチェック
    expect(screen.getByTestId('copyright')).toBeTruthy();

    //screen.debug(screen.getByText("Udemy"));
  });
});
