import React, { useEffect, useState } from "react";
import data from "./data";

const Calendar = (props) => {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        if (date && time) {
            props.actionProvider.handleSlotBooking(date, time);
            props.actionProvider.handleInputName();
            setDate(null);
            setTime(null);
            setHidden(true);
        }
        // eslint-disable-next-line
    }, [date, time]);

    return (
        <div className="flex flex-col">
            {!hidden &&
                <>
                    <div className="flex overflow-auto">
                        {data.dateSlots.map((slot, i) => {
                            return (
                                <div key={i} className={`flex flex-col items-center m-2 ml-0 text-xs shadow-lg  min-w-fit shadow-slate-300 ${date === slot ? 'bg-blue-300 text-white font-semibold' : ''} text-blue-400 py-1 px-5 rounded-lg transition-all ease-in`} onClick={() => setDate(slot)}>
                                    <span className="">
                                        {slot.date} {slot.month}
                                    </span>

                                    <span className="text-slate-500">
                                        {slot.day}
                                    </span>
                                </div>
                            )
                        })}
                    </div>

                    <div>
                        {data.timeSlots.map((slotPhase, i) => {
                            return (
                                <div className="flex flex-col my-4" key={i}>
                                    <span className="text-[11px] text-slate-700">{slotPhase.phase}</span>

                                    <div className="flex overflow-auto py-1">
                                        {slotPhase.data.map((slot, ind) => {
                                            return (
                                                <div key={ind} className={`inline-flex flex-col items-center w-fit my-2 ml-0 mr-3 text-xs shadow-lg shadow-slate-300 ${time === slot ? 'bg-blue-300 text-white font-semibold' : ''} text-slate-400 py-1 px-2 rounded-md transition-all ease-in`} onClick={() => setTime(slot)}>
                                                    <span className="">
                                                        {slot.time} {slot.label}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            }
        </div>
    );
};

export default Calendar;