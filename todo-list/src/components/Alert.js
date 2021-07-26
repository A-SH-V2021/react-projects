import React from 'react'

const Alert = ({msg,type,remove}) => {
   
    React.useEffect(() => {
       const timeout= setTimeout(() => {
            remove()
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
