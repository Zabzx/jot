function getDateAndTime() {
    // Date
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;

    // Time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    return [formattedDate, formattedTime];
}

module.exports = {
    getDateAndTime,
}