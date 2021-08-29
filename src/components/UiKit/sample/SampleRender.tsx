import React from 'react';

export const SampleRender = (): JSX.Element => {
  return (
    <div>
      <h1>React Testing Library Lesson</h1>
      <h2>こんにちわ</h2>
      <input type="text" />
      <button>Click1</button>
      <button>Click2</button>
      <p>Udemy</p>
      <span data-testid="copyright">@Reasssct</span>
    </div>
  );
};

export default SampleRender;
