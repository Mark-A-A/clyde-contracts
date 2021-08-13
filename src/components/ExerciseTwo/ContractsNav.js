import React from 'react';

export const ContractsNav = ({ handleButtonSortClick }) => {
  return (
    <nav>
      <ul>
        <li><button value="contractName" onClick={handleButtonSortClick}>name</button></li>
        <li><button value="underwriter" onClick={handleButtonSortClick}>underwriter</button></li>
        <li><button value="term" onClick={handleButtonSortClick}>term</button></li>
      </ul>
    </nav>
  )
}
