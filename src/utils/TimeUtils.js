export default class TimeUtils {

    static formatElapsed = (elapsed) => {
        let seconds = elapsed % 60;
        let minutes = Math.floor(elapsed / 60);
        let hours = Math.floor(elapsed / 360);

        let formated = TimeUtils.digitToString(minutes) + ':' + TimeUtils.digitToString(seconds);
        let units = ' mins.';
    
        if(hours > 0) {
            formated = TimeUtils.digitToString(hours) + ':' + formated;
            units = ' hrs.';
        }
        return formated + units;
    }

    static digitToString = (digit) => {
        return digit < 10 ? '0' + digit : '' + digit; 
    }
}