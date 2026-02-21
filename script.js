function calculateAttendance() {

    let classesPerDay = parseInt(document.getElementById("daily_classes").value);
    let workingDays = parseInt(document.getElementById("working_days").value);
    let currentPercentage = parseFloat(document.getElementById("current_percentage").value);
    let classesTakenSoFar = parseInt(document.getElementById("classes_taken").value);

    let requiredPercentage = 75;
    let totalSemesterClasses = classesPerDay * workingDays;
    let attendedClasses = Math.floor((currentPercentage / 100) * classesTakenSoFar);
    let requiredTotalAttendance = Math.ceil((requiredPercentage / 100) * totalSemesterClasses);
    let classesStillNeeded = requiredTotalAttendance - attendedClasses;

    if (classesStillNeeded < 0) {
        classesStillNeeded = 0;
    }
    let daysNeeded = Math.ceil(classesStillNeeded / classesPerDay);
    let maxBunkClasses = totalSemesterClasses - requiredTotalAttendance;
    let maxBunkDays = Math.floor(maxBunkClasses / classesPerDay);
    let leaveClassesTaken = classesTakenSoFar - attendedClasses;
    let leaveDaysTaken = Math.floor(leaveClassesTaken / classesPerDay);
    let remainingLeaveDays = maxBunkDays - leaveDaysTaken;

    if (remainingLeaveDays < 0) {
        remainingLeaveDays = 0;
    }

    let result =
        "You can take " + maxBunkDays + " days leave in total and still maintain 75% attendance.\n" + "You need to attend " + daysNeeded + " more days to attain 75% attendance.\n" + "So far you have taken " + leaveDaysTaken + " days leave.";

    document.getElementById("result").innerText = result;
}
