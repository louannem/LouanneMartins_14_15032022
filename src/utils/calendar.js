const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * Function to convert the timestamp to a date string
 * @param {number} timestamp Timestamp
 * @returns Date in string format
 */
export const getDateStringFromTimestamp = timestamp=> {
    let dateObject = new Date(timestamp);
    let month = dateObject.getMonth()+1;
    let date = dateObject.getDate();
    return (date < 10 ? '0'+date : date) + '/' + (month < 10 ? '0'+month : month) + '/' +  dateObject.getFullYear();
}

/**
 * Function to get the number of days in a month
 * @param {number} year State year's value
 * @param {number} month State month's value
 * @returns Number of days in given month
 */
const getNumberOfDays =(year, month)=> {
    return 40 - new Date(year, month, 40).getDate();
}

/**
 * Function to get the days' details in a month 
 * @param {object} args 
 * @returns Object containing each days details in given month in args
 */
const getDayDetails =args=> {
    let date = args.index - args.firstDay; 
    let day = args.index%7;
    let prevMonth = args.month-1;
    let prevYear = args.year;
    if(prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
    }
    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
    let _date = (date < 0 ? prevMonthNumberOfDays+date : date % args.numberOfDays) + 1;
    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(args.year, args.month, _date).getTime();
    return {
        date: _date,
        day,
        month, 
        timestamp,
        dayString: daysMap[day]
    }
}

/**
 * Function to generate the array of days in a given month
 * @param {number} year State's current year
 * @param {number} month State's current month
 * @returns Array containing every day object from given month of given year
 */
export const getMonthDetails =(year, month)=> {
    let firstDay = (new Date(year, month)).getDay();
    let numberOfDays = getNumberOfDays(year, month);
    let monthArray = [];
    let rows = 6;
    let currentDay = null;
    let index = 0; 
    let cols = 7;

    for(let row=0; row<rows; row++) {
        for(let col=0; col<cols; col++) { 
            currentDay = getDayDetails({
                index,
                numberOfDays,
                firstDay,
                year,
                month
            });
            monthArray.push(currentDay);
            index++;
        }
   
    }
    return monthArray;
}


export const monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];