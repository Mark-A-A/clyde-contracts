import React from 'react';

export const ContractsNav = ({ handleButtonSortClick }) => {
  return (
    <nav>
      <div className="nav-header"><h2>Contracts</h2></div>
      <ul>
        <li><button value="contractName" onClick={handleButtonSortClick}>name</button></li>
        <li><button value="underwriter" onClick={handleButtonSortClick}>underwriter</button></li>
        <li><button value="term" onClick={handleButtonSortClick}>term</button></li>
      </ul>
    </nav>
  )
}
