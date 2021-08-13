import { useState } from "react"

// import contractData from '../../data/exerciseTwoData';
// {
//   id: 1,
//     underwriter: 'Crux Insurance',
//       term: 2,
//         contractName: 'The Journal Plan',
//   },


export const useContractsData = (listOfContracts)  => {
  const [direction, setSortDirection] = useState(1);
  const [sortContractKey, setSortKey] = useState(null);


  const listOfContractsSorted = listOfContracts.sort((a, b) => {

    const aValue = a[sortContractKey];
    const bValue = b[sortContractKey];

    if (typeof aValue === 'string' && typeof bValue == 'string') {
      let sortReturn = 0
      if (aValue < bValue) {
        sortReturn = -1 * direction;
      }
      if (aValue > bValue) {
        sortReturn = 1 * direction;
      }
      return sortReturn;

    } else if (typeof aValue === 'number' && typeof bValue == 'number') {
      return (aValue - bValue) * (direction);
    }
  })
  return {
    listOfContracts: listOfContractsSorted,
    direction,
    setSortDirection,
    setSortKey,
  }
}