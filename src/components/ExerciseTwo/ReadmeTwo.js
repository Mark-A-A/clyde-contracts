import React from 'react';

const ExerciseOneReadme = () => {
  return (
    <div className='readme'>
      <h1>Exercise 2</h1>
        <ol>
          <li>Import exerciseTwoData.js from the data/ folder. Render each contract's contractName, underwriter and term data on screen.</li>
          <li>Create buttons in the header component to sort data by Contract Name, Underwriter, and Term.</li>
          <li>Style the rendered data according to this layout:</li>
          <ul>
            <li><a href='/images/css-exercise-2_01.png'>layout</a></li>
            <li>Note: the o's are the above buttons.</li>
          </ul>
        </ol>
        <ul>
          <li>Bonus Step: If time allows, implement this mobile layout as well:</li>
          <ul>
            <li><a href='/images/css-exercise-2_02.png'>bonus layout</a></li>
          </ul>
        </ul>

      <h2>Notes:</h2>
        <ul>
        <li>Given colors are merely illustrative, feel free to use whatever colors you want!</li>
        <li>Please follow the images as closely as possible (re: shapes and text).</li>
        </ul>
    </div>
  );
}

export default ExerciseOneReadme;
