// ImageGrid.js
import React from 'react';
import LayoutGrid from '../LayoutGrid/LayoutGrid';

function ImageGrid({ images }) {
  return (
    <div className="h-screen">
      <LayoutGrid cards={images} />
    </div>
  );
}

export default ImageGrid;
