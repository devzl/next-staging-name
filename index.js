const core = require('@actions/core');

try {
    const monthNames = ["jan", "feb", "mar", "apr", "may", "jun",
        "jul", "aug", "sep", "oct", "nov", "dec"
    ];

    const weekDays = ["sun","mon","tue","wed","thu","fri","sat"];

    const validateInput = (dayName) => {
        const dayOfWeek = weekDays
                          .indexOf(dayName.slice(0,3).toLowerCase());
        if (dayOfWeek < 0) return false;
        else return true
    }

    const getNextDayOfTheWeek = (dayName, excludeToday = true, refDate = new Date()) => {
        const dayOfWeek = weekDays
                          .indexOf(dayName.slice(0,3).toLowerCase());
        
        refDate.setHours(0,0,0,0);
        refDate.setDate(refDate.getDate() + +!!excludeToday + 
                        (dayOfWeek + 7 - refDate.getDay() - +!!excludeToday) % 7);

        const formattedDate = refDate.getDate() + "-" + monthNames[refDate.getMonth()]
        return formattedDate;
    }

    // `who-to-greet` input defined in action metadata file
    const targetDay = core.getInput('targetDay');

    if(!validateInput(targetDay)) {
        core.setFailed("Invalid day"); 
        return
    }

    const targetDate = getNextDayOfTheWeek(targetDay, false)

    core.setOutput("targetDayFormatted", targetDate);
} catch (error) {
    core.setFailed(error.message);
}