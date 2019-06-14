import React, { useState, useEffect } from 'react';

import Square from '../Square/Square';
import Text from '../Text/Text';

const testArray = Array.from(Array(16).keys());
const colors = ['#4285F4', '#FABB05', '#EA4335', '#34A852'];

const useFetch = url => {
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const { data } = await response.json();
        setApiData(data);
        setLoading(false);
      } catch (err) {
        throw new Error(err);
      }
    };

    fetchData();
  }, [url]);
  return { apiData, loading };
};

const Grid = () => {
  const gridSize = {
    height: 4,
    width: 4,
  };
  const {
    apiData: { united_states: unidtedStates = [] },
    loading,
  } = useFetch(process.env.API_CALL) || {};

  if (loading) return <div>Loading...</div>;

  return testArray.map(() => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const backgroundColor = colors[colorIndex];
    const dataIndex = Math.floor(Math.random() * unidtedStates.length);
    const text = unidtedStates[dataIndex];

    return (
      <Square gridSize={gridSize} backgroundColor={backgroundColor}>
        <Text content={text} />
      </Square>
    );
  });
};

export default Grid;
