class UtilService {

    static padWithZero(number) {
        const string = number.toString();
        if (number < 10) {
            return "0" + string;
        }
        return string;
    };


    static getTime(date) {
        let d = new Date(date);
        const padWithZero = number => {
            const string = number.toString();
            if (number < 10) {
                return "0" + string;
            }
            return string;
        };
        return padWithZero(d.getHours()) + ':' + padWithZero(d.getMinutes())
    }

    static divideTime(times) {
        var hour = Math.floor(times / 60);
        var minute = times % 60;

        const padWithZero = number => {
            const string = number.toString();
            if (number < 10) {
                return "0" + string;
            }
            return string;
        };

        if (hour > 23) {
            hour = hour - 24
        }

        return padWithZero(hour) + ':' + padWithZero(minute);
    }
}

export default UtilService
