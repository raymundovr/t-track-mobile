export default class TimeUtils {

    static formatElapsed = (elapsed) => {
        var seconds = elapsed % 60;
        var minutes = Math.floor(elapsed / 60);
        var secondsString = TimeUtils.digitToString(seconds);
        var minutesString = TimeUtils.digitToString(minutes);

        return minutesString + ':' + secondsString;
    }

    static digitToString = (digit) => {
        return digit < 10 ? '0' + digit : '' + digit; 
    }
}