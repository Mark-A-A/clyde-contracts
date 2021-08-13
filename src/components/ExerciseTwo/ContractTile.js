import React from 'react';

export const ContractTile = (props) => {
  const { contract } = props;
  const { contractName, underwriter, term} = contract;
  console.log(contract);

  return (
    <li className="contract-tile">
      <div className="contract-data">
        <h4>{contractName}</h4>
        <div><span>Underwriter: {underwriter}</span></div>
        <div><span>Term: {term}</span></div>
      </div>
    </li>
  )
}