import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MockServer from './MockServer';

const testUrl = 'https://jsonplaceholder.typicode.com/users/1';
const server = setupServer(
  rest.get(testUrl, (_, res, ctx) => {
    // 200で返ってきた時にjsonの中身を定義している。
    return res(ctx.status(200), ctx.json({ username: 'Bred dummy' }));
  }),
);

beforeAll(() => server.listen());

//各テスト毎に実行をさせる。
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

// 最後にmockサーバーを閉じる
afterAll(() => server.close());

describe('Mocking API', () => {
  it('[Fetch success]Should display fetched data correctly and button disable', async () => {
    render(<MockServer />);
    submitButton();
    expect(await screen.findByTestId('heading')).toHaveTextContent('Bred dummy');
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
  it('[Fetch failure]Should display error msg, no render heading and button abled', async () => {
    //  serverのレスポンスの内容をここのケースで書き換えている。
    server.use(
      rest.get(testUrl, (_, res, ctx) => {
        return res(ctx.status(404));
      }),
    );
    render(<MockServer />);
    submitButton();
    expect(await screen.findByTestId('error')).toHaveTextContent('Fetching Failed !');
    expect(screen.queryByRole('heading')).toBeNull();
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });
});

const submitButton = () => {
  userEvent.click(screen.getByRole('button'));
};
