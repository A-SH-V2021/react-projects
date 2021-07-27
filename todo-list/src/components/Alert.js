import React from 'react'

const Alert = ({msg,type,removeAlert}) => {
   
    React.useEffect(() => {
       const timeout= setTimeout(() => {
        removeAlert()
        }, 2000);
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
        <>
           <p className={`alert alert-${type}`}>{msg}</p>
        </>
    )
}

export default Alert
