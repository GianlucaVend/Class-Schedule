/**
 *          Lab 2 - JavaScript Representation of Weeky Class Schedule
 *          =========================================================
 */


/**
 * The following section declares the raw data that will be used to make up the schedule.
 * A JavaScript object is declared and initialized for each timeslot (i.e. lecure or lab).
 * 
 * Note: on a larger scale, this section could define all of the labs and lectures for an
 * entire program or even the entire college. 
 * 
 * TODO: Create a set of JavaScript objects that represent the lecures and labs for your
 * weekly class schedule. 
 */
 var comp220Lab = {
    code: "COMP220",
    type: "Lab",
    name: "php programming",
    day: "Monday",
    start: "8:30",
    length: 2,
    instructor: "Janis"
};

var comp220Lab102 = {
    code: "COMP220",
    type: "Lab",
    name: "php programming",
    day: "Wednesday",
    start: "1:30",
    length: 2,
    instructor: "Janis"
};

var comp333Lecture101 = {
    code: "COMP333",
    type: "Lecture",
    name: "Advanced C++",
    day: "Monday",
    start: "1:30",
    length: 2,
    instructor: "Colin Graves"
};

var comp333Lecture101b = {
    code: "COMP333",
    type: "Lecture",
    name: "Advanced C++",
    day: "Tuesday",
    start: "10:30",
    length: 2,
    instructor: "Colin Graves"
};

var comp333Lab102 = {
    code: "COMP333",
    type: "Lab",
    name: "Advanced C++",
    day: "Friday",
    start: "10:30",
    length: 2,
    instructor: "Colin Graves"
};

var comp1080Lecture101 = {
    code: "COMP1081",
    type: "Lecture",
    name: "Operating Systems Linux, z/OS, TSO/ISPF",
    day: "Tuesday",
    start: "11:30",
    length: 1,
    instructor: "Colin Graves"
};


var comp1080Lab102 = {
    code: "COMP1081",
    type: "Lab",
    name: "Operating Systems Linux, z/OS, TSO/ISPF",
    day: "Tuesday",
    start: "8:30",
    length: 2,
    instructor: "Colin Graves"
};

var comp206Lecture101 = {
    code: "COMP206",
    type: "Lecture",
    name: "Web Programming with JavaScript",
    day: "Thrusday",
    start: "9:30",
    length: 2,
    instructor: "Colin Banger"
};

var comp206Lab102L = {
    code: "COMP206",
    type: "Lab",
    name: "Web Programming with JavaScript",
    day: "Friday",
    start: "12:30",
    length: 2,
    instructor: "Colin Banger"
};

var care10Lecture101 = {
    code: "CARE10",
    type: "Lecture",
    name: " Career Strategies for Computing Professionals",
    day: "Thrusday",
    start: "2:30",
    length: 2,
    instructor: "Troy"
};

/**
 * The following section builds a JavaScript object that contains the lecture and lab 
 * objects from the previous section nested inside.  This section demonstrates that 
 * an object can be built step by step, starting with an empty object and adding one 
 * class object at a time.  
 * 
 * TODO create a 'classList' object containing nested lecture and lab objects for your
 * schedule.
 */

 const classList = {};

 classList.comp220Lab = comp220Lab;
 classList.comp220Lab102 = comp220Lab102;
 classList.comp333Lecture101 = comp333Lecture101
 classList.comp333Lecture101b = comp333Lecture101b
 classList.comp333Lab102 = comp333Lab102
 classList.comp1080Lecture101 = comp1080Lecture101;
 classList.comp1080Lab102 = comp1080Lab102;
 classList.comp206Lecture101 = comp206Lecture101;
 classList.comp206Lab102L = comp206Lab102L;
 classList.care10Lecture101 = care10Lecture101;
 
    
/**
 * The following section demonstrates how to create a JavaScript array containing
 * the JavaScript lecture and lab objects.
 * 
 * TODO: create a 'weeklySchedule' array that contains the lecture and lab objects for
 * your weekly schedule
 */

  weeklySchedule = [
    classList["comp220Lab"],
    classList["comp220Lab102"],
    classList["comp333Lecture101"],
    classList["comp333Lecture101b"],
    classList["comp333Lab102"],
    classList["comp1080Lecture101"],
    classList["comp1080Lab102"],
    classList["comp206Lecture101"],
    classList["comp206Lab102L"],
    classList["care10Lecture101"],
];

/**
 * The following section defines a 'dailySchedule' object that can be indexed using
 * either dot notation or by string indices.   This object can be used to return the
 * class schedule for any given weekday.
 * 
 * TODO: create a 'dailySchedule' that contains the lectures and labs for your weekly schedule
 */

 const dailySchedule = {
    monday: [comp220Lab, comp333Lecture101],
    tuesday: [comp333Lecture101b, comp1080Lecture101],
    wednesday: [comp1080Lab102, comp220Lab102],
    thursday: [comp206Lecture101, care10Lecture101],
    friday: [comp333Lab102, comp206Lab102L]
}


/**
 *  The following section creates a 'masterSchedule' consisting of each of the schedule objects defined above.
 * 
 */

 const masterSchedule = {
    dailySchedule: dailySchedule,
    weeklySchedule: weeklySchedule,
    classList: classList,
}


module.exports = masterSchedule;