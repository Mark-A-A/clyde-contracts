import { useState } from "react"

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