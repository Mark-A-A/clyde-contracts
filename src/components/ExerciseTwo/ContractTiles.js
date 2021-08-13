import React from 'react';

import { ContractTile } from './ContractTile';

export const ContractTiles = (props) => {
  const { contracts } = props;
  console.log(contracts);

  return (
    <section className="contracts-tile-wrapper">
      <ul className="contracts-tiles-list">
        {
          contracts.length &&
          contracts.map((contract) => {
            return (
              <ContractTile contract={contract} />
            )
          })
        }
      </ul>
    </section>
  )
}