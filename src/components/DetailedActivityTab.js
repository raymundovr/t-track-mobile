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
        let perDate = {};
        let detailed = [];
        for(var i=0; i < activities.length; i++){
            let activityDate = new Date(activities[i].date);
            let activityKey = activityDate.getDate()+ ':' + activityDate.getMonth() + ':' + activityDate.getFullYear();
            if(activityKey in perDate) {
                perDate[activityKey].spent += activities[i].elapsed;
            }
            else {
                perDate[activityKey] =         
                {
                    'date': activityDate.getDate(),
                    'month': this.monthFunction(DateUtils.getMonthName(activityDate.getMonth())),
                    'spent': activities[i].elapsed,
                };                
            }            
        }
        let keys = Object.keys(perDate);
        keys.forEach(function(key) {
            detailed.push({
                'date': perDate[key].date, 
                'month': perDate[key].month, 
                'spent': TimeUtils.formatElapsed(perDate[key].spent)
            });
        });
        return(
            <ActivitiesList activities={detailed}/>
        );
    }
}