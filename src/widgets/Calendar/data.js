const dateSlots = [
    {
        day: "MON",
        date: "2",
        month: "APRIL",
    },
    {
        day: "MON",
        date: "2",
        month: "MAY",
    },
    {
        day: "MON",
        date: "2",
        month: "JUNE",
    },
    {
        day: "MON",
        date: "2",
        month: "JULY",
    },
];

const timeSlots = [
    {
        phase: "MORNING",
        data: [
            {
                time: "10:00",
                label: "AM",
            },
            {
                time: "11:00",
                label: "AM",
            },
        ],
    },
    {
        phase: "AFTERNOON",
        data: [
            {
                time: "12:00",
                label: "PM",
            },
            {
                time: "02:00",
                label: "PM",
            },
        ],
    },
];

const data = {
    timeSlots,
    dateSlots
}

export default data;