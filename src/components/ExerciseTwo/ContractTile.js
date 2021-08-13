import React from 'react';

export const ContractTile = (props) => {
  const { contract } = props;
  const { id, contractName, underwriter, term} = contract;
  console.log(contract);

  return (
    <li key={`${id}_${contractName}`} className="contract-tile">
      <div className="contract-data">
        <h4>{contractName}</h4>
        <div>{underwriter}</div>
        <div>{term}</div>
      </div>
    </li>
  )
}