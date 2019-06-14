import React from 'react';

const Text = ({ content }) => (
  <a
    style={{ margin: '0 20px', textDecoration: 'none', color: '#fff' }}
    href={`https://www.google.com/search?q=${content}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {content}
  </a>
);

export default Text;
