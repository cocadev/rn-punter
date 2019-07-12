class UtilService {

    static getTime(date) {
        let d = new Date(date);
        const padWithZero = number => {
            const string = number.toString();
            if (number < 10) {
                return "0" + string;
            }
            return string;
        };
        return padWithZero(d.getHours())+':'+ padWithZero(d.getMinutes()) 
    }
}

export default UtilService
