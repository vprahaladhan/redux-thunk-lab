// write your CatList component here
import React from 'react';

const CatList = ({ catPics }) => (
  <div>
    {
      catPics.map(pic => <div><img src={pic} /></div>)
    }
  </div>
)

export default CatList;