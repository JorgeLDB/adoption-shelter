// Placeholder to host a component
import React from "react";

function Hours() {
    const schedule = [
        { day: 1, open: "10:00", close: "16:00" },
        { day: 2, open: "10:00", close: "16:00" },
        { day: 3, open: "10:00", close: "16:00" },
        { day: 4, open: "10:00", close: "16:00" },
        { day: 5, open: "10:00", close: "16:00" },
        { day: 6, open: "9:00", close: "20:00" },
        { day: 0, open: "9:00", close: "20:00" },
    ];

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const todayNumber = new Date().getDay();
    const todayName = dayNames[todayNumber];
    const todayHours = schedule.find((day) => day.day === todayNumber);

    return (
        <div id="hours">
            <h2>Today's Hours</h2>
            <p>{todayName} {todayHours.open} - {todayHours.close}</p>
        </div>
    )
}

export default Hours;