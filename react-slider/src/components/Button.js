import React from 'react'

const Button = ({classes,clickHandle,children}) => {
    return (
        <div>
            <button className={classes} onClick={clickHandle}>
                {children}
            </button>
        </div>
    )
}

export default Button
