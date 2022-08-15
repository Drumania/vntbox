import React from "react";

import EventsByDay from "./EventsByDay";

const Calendar = () => {
  const d = new Date();
  const month = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  let nameMonth = month[d.getMonth()],
    day = d.getDate();

  return (
    <div className="custom-box custom-box-height-full p-3">
      <div className="row">
        <div className="col-12 wraper-calendar">
          <div className="calendar-tools">
            <div>
              <a href="#!">
                <i className="fas fa-chevron-left"></i>
              </a>
              <a href="#!">
                <i className="fas fa-chevron-right"></i>
              </a>
              <h2>
                {nameMonth} {day}
              </h2>
            </div>
            <div>
              <a href="#!" className="opacity-5">
                <i className="fas fa-bars"></i>
              </a>
              <a href="#!" className="opacity-10">
                <i className="fas fa-th"></i>
              </a>
            </div>
          </div>

          <div className="week">
            <div className="week-day">Monday</div>
            <div className="week-day">Tuesday</div>
            <div className="week-day">Wednesday</div>
            <div className="week-day">Thursday</div>
            <div className="week-day">Friday</div>
            <div className="week-day">Saturday</div>
            <div className="week-day">Sunday</div>
          </div>
          <div className="week">
            <div className="day">
              <label className="day-label">1</label>
              <ul>
                <li>
                  <EventsByDay
                    nameAccount={"Coderhouse"}
                    imgAccount={"coderhouse.jpg"}
                  />
                </li>
                <li>
                  <EventsByDay nameAccount={"mapex"} imgAccount={"mapex.jpg"} />
                </li>
                <li>
                  <EventsByDay
                    nameAccount={"mashinky"}
                    imgAccount={"mashinky.png"}
                  />
                </li>
                <li>
                  <EventsByDay
                    nameAccount={"Overwatch"}
                    imgAccount={"overwatch.png"}
                  />
                </li>
                <li>
                  <EventsByDay
                    nameAccount={"Platzi"}
                    imgAccount={"platzi.png"}
                  />
                </li>
                <li>
                  <a href="Event" className="event-in-cal-more">
                    2+
                  </a>
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">2</label>
              <ul>
                <li>
                  <EventsByDay nameAccount={"Uber"} imgAccount={"uber.png"} />
                </li>
                <li>
                  <EventsByDay nameAccount={"Ufc"} imgAccount={"ufc.jpg"} />
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">3</label>
            </div>
            <div className="day">
              <label className="day-label">4</label>
              <ul>
                <li>
                  <EventsByDay nameAccount={"coderhouse"} />
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">5</label>
            </div>
            <div className="day">
              <label className="day-label">6</label>
            </div>
            <div className="day">
              <label className="day-label">7</label>
            </div>
          </div>

          <div className="week">
            <div className="day">
              <label className="day-label">8</label>
              <ul>
                <li>
                  <EventsByDay nameAccount={"mapex"} imgAccount={"mapex.jpg"} />
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">9</label>
            </div>
            <div className="day">
              <label className="day-label">10</label>
            </div>
            <div className="day">
              <label className="day-label">11</label>
            </div>
            <div className="day">
              <label className="day-label">12</label>
              <ul>
                <li>
                  <EventsByDay nameAccount={"mapex"} imgAccount={"mapex.jpg"} />
                </li>
                <li>
                  <EventsByDay
                    nameAccount={"mashinky"}
                    imgAccount={"mashinky.png"}
                  />
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">13</label>
            </div>
            <div className="day">
              <label className="day-label">14</label>
            </div>
          </div>

          <div className="week">
            <div className="day">
              <label className="day-label">15</label>
              <ul>
                <li>
                  <EventsByDay
                    nameAccount={"netflix"}
                    imgAccount={"netflix.png"}
                  />
                </li>
                <li>
                  <EventsByDay nameAccount={"Boca"} imgAccount={"boca.png"} />
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">16</label>
            </div>
            <div className="day">
              <label className="day-label">17</label>
              <ul>
                <li>
                  <EventsByDay nameAccount={"Uber"} imgAccount={"uber.png"} />
                </li>
                <li>
                  <EventsByDay nameAccount={"Ufc"} imgAccount={"ufc.jpg"} />
                </li>
                <li>
                  <EventsByDay
                    nameAccount={"mashinky"}
                    imgAccount={"mashinky.png"}
                  />
                </li>
                <li>
                  <EventsByDay
                    nameAccount={"Overwatch"}
                    imgAccount={"overwatch.png"}
                  />
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">18</label>
            </div>
            <div className="day">
              <label className="day-label">19</label>
              <ul>
                <li>
                  <EventsByDay
                    nameAccount={"netflix"}
                    imgAccount={"netflix.png"}
                  />
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">20</label>
            </div>
            <div className="day">
              <label className="day-label">21</label>
              <ul>
                <li>
                  <EventsByDay nameAccount={"Ufc"} imgAccount={"ufc.jpg"} />
                </li>
              </ul>
            </div>
          </div>

          <div className="week">
            <div className="day">
              <label className="day-label">22</label>
            </div>
            <div className="day">
              <label className="day-label">23</label>
            </div>
            <div className="day">
              <label className="day-label">24</label>
              <EventsByDay
                nameAccount={"Coderhouse"}
                imgAccount={"coderhouse.jpg"}
              />
            </div>
            <div className="day">
              <label className="day-label">25</label>
            </div>
            <div className="day">
              <label className="day-label">26</label>
            </div>
            <div className="day">
              <label className="day-label">27</label>
              <ul>
                <li>
                  <EventsByDay
                    nameAccount={"Overwatch"}
                    imgAccount={"overwatch.png"}
                  />
                </li>
                <li>
                  <EventsByDay nameAccount={"Uber"} imgAccount={"uber.png"} />
                </li>
                <li>
                  <EventsByDay nameAccount={"Ufc"} imgAccount={"ufc.jpg"} />
                </li>
                <li>
                  <EventsByDay
                    nameAccount={"mashinky"}
                    imgAccount={"mashinky.png"}
                  />
                </li>
                <li>
                  <EventsByDay
                    nameAccount={"Overwatch"}
                    imgAccount={"overwatch.png"}
                  />
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">28</label>
            </div>
          </div>

          <div className="week">
            <div className="day">
              <label className="day-label">29</label>
            </div>
            <div className="day">
              <label className="day-label">30</label>
            </div>
            <div className="day">
              <label className="day-label">31</label>
            </div>
            <div className="day">
              <label className="day-label opacity-3">1</label>
            </div>
            <div className="day">
              <label className="day-label opacity-3">2</label>
            </div>
            <div className="day">
              <label className="day-label opacity-3">3</label>
            </div>
            <div className="day">
              <label className="day-label opacity-3">4</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
