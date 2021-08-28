import React from 'react';
import { render, screen } from '@testing-library/react';
import SampleRender from '../UiKit/SampleRender';

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    render(<SampleRender />);
    //screen.debug();
    //https://github.com/A11yance/aria-query#elements-to-roles
    //https://jestjs.io/docs/en/expect

    // screen.debug(screen.getByRole('heading'));
    expect(screen.getAllByRole('heading')[0]).toBeTruthy();
    expect(screen.getAllByRole('heading')[1]).toBeTruthy();
    expect(screen.getByText('React Testing Library Lesson')).toBeTruthy();
    expect(screen.getByText('こんにちわ')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
    expect(screen.getAllByRole('button')[0]).toBeTruthy();
    expect(screen.getAllByRole('button')[1]).toBeTruthy();
    expect(screen.getByText('Udemy')).toBeTruthy();
    // Udeeeemyがないことを確認。
    expect(screen.queryByText('Udeeeemy')).toBeNull();
    // data-testidがのチェック
    expect(screen.getByTestId('copyright')).toBeTruthy();

    //screen.debug(screen.getByText("Udemy"));
  });
});
