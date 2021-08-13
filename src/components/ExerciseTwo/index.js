import React from 'react';

import contractData  from '../../data/exerciseTwoData';
import { useContractsData } from './Hooks/useContractsData';
import { ContractsNav } from './ContractsNav';
import { ContractTiles } from './ContractTiles';

import './exerciseTwo.css';

const ExerciseTwo = (props) => {
  const {
    listOfContracts,
    direction,
    setSortDirection,
    setSortKey
  } = useContractsData(contractData);
  
  const handleButtonSortClick = (e) => {
    const { value } = e.target;
    console.log(value);
    setSortKey(value);
    setSortDirection(direction * -1);
  }

  return (
    <div className='layout'>
      <div className='layout__header'>
        <ContractsNav handleButtonSortClick={handleButtonSortClick}/>
      </div>
  
      <div className='layout__body'>
        {
          <ContractTiles contracts={listOfContracts} />
        }
      </div>
    </div>
  );
}


export default ExerciseTwo;
