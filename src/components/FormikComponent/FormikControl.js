import React from 'react'
import DatePicker from '../DatePicker'
 

function FormikControl(props) {
    const {control, ...rest} = props
    console.log(control)
    switch(control) {
        case 'date':
            return <DatePicker {...rest}/>  
        default: return null
    }
}

export default FormikControl