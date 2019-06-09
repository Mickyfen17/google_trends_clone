import React, { useState, useEffect } from 'react';

import Square from '../Square/Square';

const testArray = Array.from(Array(16).keys());
const colors = ['#4285F4', '#FABB05', '#EA4335', '#34A852'];

const useFetch = url => {
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const { data } = await response.json();
      setApiData(data);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);
  return apiData;
};

const Grid = () => {
  const gridSize = {
    height: 4,
    width: 4,
  };
  const { united_states = [] } = useFetch('') || {};

  return testArray.map(() => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const backgroundColor = colors[colorIndex];
    const dataIndex = Math.floor(Math.random() * united_states.length);
    const text = united_states[dataIndex];
    return (
      <Square gridSize={gridSize} backgroundColor={backgroundColor}>
        {text}
      </Square>
    );
  });
};

export default Grid;
