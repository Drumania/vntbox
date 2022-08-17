import React from 'react';
import EventsByDay from "./EventsByDay";

const Day = () => {
  return (
    <ul>
      <li>
        <EventsByDay nameAccount={"Uber"} imgAccount={"uber.png"} />
      </li>
      <li>
        <EventsByDay nameAccount={"Ufc"} imgAccount={"ufc.jpg"} />
      </li>
    </ul>
  );
}

export default Day;
