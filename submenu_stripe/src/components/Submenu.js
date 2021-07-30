import React, { } from 'react';
import { useGlobalContxt } from '../context/Context'

const Submenu = () => {
const data= useGlobalContxt()
console.log(data);
    return (
        <div>
            <h3>submenu</h3>
        </div>
    )
}

export default Submenu
