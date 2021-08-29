import React from 'react';

const FrameworkList = ({
  frameworks,
  noDataText = 'No data !',
}: {
  frameworks?: any[];
  noDataText?: string;
}): JSX.Element => {
  if (!frameworks || !frameworks.length) {
    return <h1>{noDataText}</h1>;
  }
  return (
    <div>
      <ul>
        {frameworks.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FrameworkList;
