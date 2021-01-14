import React from 'react';
<<<<<<< HEAD

import classes from './BuildControl.css'


=======
import classes from './BuildControl.css'

>>>>>>> 30ae0c711ea191196586e6488f63d73ff80bdee0
const buildControl = (props) =>{
    return <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>less</button>
        <button className={classes.More}>more</button>
    </div>
}

export default buildControl
