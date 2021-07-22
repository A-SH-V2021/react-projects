import React from "react";
import {DiReact} from 'react-icons/di'

const Header = () => {
  return (
    <div>
      <div className="title">
        <h2>
          <span>
          <DiReact className='icon-react'/>  
          </span>review
        </h2>
      </div>
    </div>
  );
};

export default Header;
