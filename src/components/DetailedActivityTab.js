import React from 'react';
import DateUtils from '../utils/DateUtils.js';
import TimeUtils from '../utils/TimeUtils.js';
import ActivitiesList from './ActivitiesList.js';

export default class DetailedActivityTab extends React.Component {
    monthFunction = (month) => {
        return month.substring(0,3).toUpperCase()
    };  
    render() {
        const activities = this.props.activities;      

        let detailed = [];
        for(var i=0; i < activities.length; i++){
            let activityDate = new Date(activities[i].date);   
            let detail =         
            {
                'date': activityDate.getDay() + ' ' + this.monthFunction(DateUtils.getMonthName(activityDate.getMonth())),
                'spent': TimeUtils.formatElapsed(activities[i].elapsed),
            };
            detailed.push(detail);
        }
        return(
            <ActivitiesList activities={detailed}/>
        );
    }
}