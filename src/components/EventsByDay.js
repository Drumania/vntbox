import React from "react";

const EventsByDay = ({ nameAccount, imgAccount }) => {
  console.log(nameAccount);
  return (
    <a
      href="Event"
      className="event-in-cal"
      style={{
        backgroundImage: `url(../img/avatar/${imgAccount})`
      }}
      title="coderhouse"
    >
      {nameAccount}
    </a>
  );
};

export default EventsByDay;
