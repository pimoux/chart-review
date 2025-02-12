export const buildPeriodRange = () => {
    const result = {};
    let startDate = new Date(2024, 8, 2);
    const stopDate = new Date(2025, 1, 10);
    const validDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    const associatedMonths = {
        "Jan": "janvier",
        "Feb": "fevrier",
        "Mar": "mars",
        "Apr": "avril",
        "May": "mai",
        "Jun": "juin",
        "Jul": "juillet",
        "Aug": "aout",
        "Sep": "septembre",
        "Oct": "octobre",
        "Nov": "novembre",
        "Dec": "decembre",
    }
    
    while (startDate.getTime() <= stopDate.getTime()) {
        const dateString = startDate.toString().split(" ");
        const dayName = dateString[0];
        const dayNumber = dateString[2];
        const month = dateString[1];
        const frenchMonth = associatedMonths[month];
        const year = dateString[3];
    
        if (!(year in result)) {
            result[year] = {};
        }
    
        if (!(frenchMonth in result[year])) {
            result[year][frenchMonth] = [];
        }
    
        if (validDays.includes(dayName)) {
            result[year][frenchMonth].push(parseInt(dayNumber));
        }
    
        startDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1);
    }

    result["2025"]["janvier"].shift();

    return result;
}