import React, {useContext} from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts= () =>{
    // bring all atributes from alert context
    const alertContext = useContext(AlertContext);

    return (
        alertContext.alerts.length > 0 && alertContext.alerts.map((alert: { id: number; msg: string; }) => (
            <div key = {alert.id} >
                <p>{alert.msg}</p>
            </div>
        ))
    )
}

export default Alerts;
