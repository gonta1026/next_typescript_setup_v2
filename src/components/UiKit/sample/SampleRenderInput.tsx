import React from 'react';

const SampleRenderInput = ({
  outputConsole,
  inputLabel = 'labelです',
}: {
  outputConsole?: any;
  inputLabel?: string;
}) => {
  const [input, setInput] = React.useState('');
  const outputValue = () => {
    if (input) {
      outputConsole(input);
    }
  };

  const updateValue = (e: any) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <label data-testid="label">{inputLabel}</label>
      <input type="text" placeholder="Enter" value={input} onChange={updateValue} />
      <button onClick={outputValue}>Console</button>
    </div>
  );
};

export default SampleRenderInput;
