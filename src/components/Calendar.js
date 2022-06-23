import React from "react";

import coderhouse from "../img/avatar/coderhouse.jpg";
import mapex from "../img/avatar/mapex.jpg";
import mashinky from "../img/avatar/mashinky.png";
import overwatch from "../img/avatar/overwatch.png";
import platzi from "../img/avatar/platzi.png";
import uber from "../img/avatar/uber.png";
import ufc from "../img/avatar/ufc.jpg";
import netflix from "../img/avatar/netflix.png";
import boca from "../img/avatar/boca.png";

const Calendar = () => {
  return (
    <div className="custom-box custom-box-height-full p-3">
      <div className="row">
        <div className="col-12 wraper-calendar">
          <div className="calendar-tools">
            <a href="#!">
              <i className="fas fa-chevron-left"></i>
            </a>
            <a href="#!">
              <i className="fas fa-chevron-right"></i>
            </a>
            <h2>Julio 2019</h2>
            <a href="#!" className="float-right opacity-5">
              <i className="fas fa-bars"></i>
            </a>
            <a href="#!" className="float-right opacity-10">
              <i className="fas fa-th"></i>
            </a>
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
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${coderhouse})`,
                    }}
                    title="coderhouse"
                  >
                    coderhouse
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${mapex})`,
                    }}
                    title="mapex"
                  >
                    mapex
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${mashinky})`,
                    }}
                    title="mashinky"
                  >
                    mashinky
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${overwatch})`,
                    }}
                    title="overwatch"
                  >
                    overwatch
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${platzi})`,
                    }}
                    title="platzi"
                  >
                    platzi
                  </a>
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
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${uber})`,
                    }}
                    title="uber"
                  >
                    uber
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${ufc})`,
                    }}
                    title="ufc"
                  >
                    ufc
                  </a>
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">3</label>
            </div>
            <div className="day">
              <label className="day-label">4</label>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${coderhouse})`,
                    }}
                    title="coderhouse"
                  >
                    coderhouse
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${mapex})`,
                    }}
                    title="mapex"
                  >
                    mapex
                  </a>
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
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${mapex})`,
                    }}
                    title="mapex"
                  >
                    mapex
                  </a>
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
                <li></li>
                <li></li>
                <li></li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${mapex})`,
                    }}
                    title="mapex"
                  >
                    mapex
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${mashinky})`,
                    }}
                    title="mashinky"
                  >
                    mashinky
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${overwatch})`,
                    }}
                    title="overwatch"
                  >
                    overwatch
                  </a>
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
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${netflix})`,
                    }}
                    title="netflix"
                  >
                    netflix
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${boca})`,
                    }}
                    title="boca"
                  >
                    boca
                  </a>
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">16</label>
            </div>
            <div className="day">
              <label className="day-label">17</label>
              <ul>
                <li></li>
                <li></li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${uber})`,
                    }}
                    title="uber"
                  >
                    uber
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${ufc})`,
                    }}
                    title="ufc"
                  >
                    ufc
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${mashinky})`,
                    }}
                    title="mashinky"
                  >
                    mashinky
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${overwatch})`,
                    }}
                    title="overwatch"
                  >
                    overwatch
                  </a>
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">18</label>
            </div>
            <div className="day">
              <label className="day-label">19</label>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${netflix})`,
                    }}
                    title="netflix"
                  >
                    netflix
                  </a>
                </li>
              </ul>
            </div>
            <div className="day">
              <label className="day-label">20</label>
            </div>
            <div className="day">
              <label className="day-label">21</label>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${ufc})`,
                    }}
                    title="ufc"
                  >
                    ufc
                  </a>
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
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${overwatch})`,
                    }}
                    title="overwatch"
                  >
                    overwatch
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${platzi})`,
                    }}
                    title="platzi"
                  >
                    platzi
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${uber})`,
                    }}
                    title="uber"
                  >
                    uber
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${ufc})`,
                    }}
                    title="ufc"
                  >
                    ufc
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${mashinky})`,
                    }}
                    title="mashinky"
                  >
                    mashinky
                  </a>
                </li>
                <li>
                  <a
                    href="Event"
                    className="event-in-cal"
                    style={{
                      backgroundImage: `url(${overwatch})`,
                    }}
                    title="overwatch"
                  >
                    overwatch
                  </a>
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
