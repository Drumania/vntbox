import { Link } from "react-router-dom";

import mapex from "../img/avatar/mapex.jpg";
import mashinky from "../img/avatar/mashinky.png";
import platzi from "../img/avatar/platzi.png";
import ufc from "../img/avatar/ufc.jpg";

const Event = () => {
  return (
    <>
      <main className="col-12  ">
        <div className="custom-box custom-box-vntbox p-3 mb-5">
          <div className="row">
            <div className="col-9">
              <div className="wrap-img-event bg-dark">
                <img
                  src="img/event-int/musehipodromo.jpg"
                  className="img-fluid"
                  alt="musehipodromo"
                />
              </div>
            </div>

            <div className="col-3 d-flex align-items-start flex-column">
              <div className="mb-auto">
                Viernes, 11 de octubre de 2019
                <br />
                <small>9:00 pm</small>
              </div>
              <div>
                <h1>MUSE - Simulation Theory World Tour 2019</h1>
              </div>
              <div className="mt-auto">
                <div className="row no-gutters">
                  <div className="col-9 mt-3">
                    <span className="font-weight-normal">
                      Hipódromo de Palermo
                    </span>
                    <br />
                    <span className="font-weight-lighter">
                      Av. Libertador 4101
                    </span>
                  </div>
                  <div className="col-3 text-center">
                    <img className="img-fluid" src="img/mapa.jpg" alt="mapa" />
                    <small>ver mapa</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="row col-12 no-gutters table-secondary py-3 mt-3">
              <div className="col-9 pt-1">
                Share:
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-secondary">
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <i className="fab fa-facebook-square"></i>
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <i className="fab fa-youtube-square"></i>
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <i className="fab fa-twitch"></i>
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <i className="fab fa-twitter-square"></i>
                  </button>
                </div>
              </div>
              <div className="col-3 text-center">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Buy Tickets
                </button>
              </div>
            </div>

            <div className="col-12 row py-5">
              <div className="col-3">
                <h2>Organiza</h2>
                <ul>
                  <li className="avatar-user">
                    <Link
                      to={"/Profile"}
                      className="event-in-cal"
                      style={{
                        backgroundImage: `url(${mapex})`,
                      }}
                      alt="ufc"
                    >
                      mapex
                    </Link>
                    <Link to={"/Profile"} className="avatar-name" title="Mapex">
                      Mapex
                    </Link>
                    <Link
                      to={"/Profile"}
                      className="avatar-next-event"
                      alt="mapex"
                    >
                      next event in 1 day
                    </Link>
                    <Link to={"/Profile"} className="avatar-add">
                      add
                    </Link>
                  </li>
                </ul>

                <h2 className="mt-5">Participa</h2>
                <ul>
                  <li className="avatar-user">
                    <Link
                      to={"/Profile"}
                      className="event-in-cal"
                      style={{
                        backgroundImage: `url(${ufc})`,
                      }}
                      alt="ufc"
                    >
                      ufc
                    </Link>
                    <Link to={"/Profile"} className="avatar-name" alt="ufc">
                      UFC
                    </Link>
                    <Link
                      to={"/Profile"}
                      className="avatar-next-event"
                      alt="ufc"
                    >
                      next event in 1 day
                    </Link>
                    <Link to={"/Profile"} className="avatar-add" alt="ufc">
                      add
                    </Link>
                  </li>
                  <li className="avatar-user">
                    <Link
                      to={"/Profile"}
                      className="event-in-cal"
                      style={{
                        backgroundImage: `url(${mashinky})`,
                      }}
                      alt="mashinky"
                    >
                      mashinky
                    </Link>
                    <Link to={"/Profile"} className="avatar-name" alt="ufc">
                      Mashinky
                    </Link>
                    <Link
                      to={"/Profile"}
                      className="avatar-next-event"
                      alt="ufc"
                    >
                      next event in 1 month
                    </Link>
                    <Link to={"/Profile"} className="avatar-add" alt="ufc">
                      add
                    </Link>
                  </li>
                  <li className="avatar-user">
                    <Link
                      to={"/Profile"}
                      className="event-in-cal"
                      style={{
                        backgroundImage: `url(${platzi})`,
                      }}
                      alt="platzi"
                    >
                      platzi
                    </Link>
                    <Link to={"/Profile"} className="avatar-name" alt="ufc">
                      Platzi
                    </Link>
                    <Link
                      to={"/Profile"}
                      className="avatar-next-event"
                      alt="ufc"
                    >
                      next event in 14 hours
                    </Link>
                    <Link to={"/Profile"} className="avatar-add" alt="ufc">
                      add
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-9 border-left">
                Flow Music XP presenta:
                <br />
                <br />
                Muse en Buenos Aires, Argentina
                <br />
                Viernes 11 de octubre
                <br />
                <br />
                ► #SimulationTheoryWorldTour
                <br />
                <br />
                Produce DF Entertainment <br />
                <br />
                Flow Music XP presenta Muse en Argentina 🇦🇷
                <br />
                11 de octubre
                <br />
                Hipódromo de Palermo
                <br />
                <br />
                🤟 Invitado especial: AIRBAG Oficial
                <br />
                Ya podés comprar tus entradas desde $2.500 + Service Charge a
                través de All Access Oficial
                <br />
                Con Club Personal vas a obtener un 15% de descuento en la compra
                de tus entradas durante todo el período de venta o hasta agotar
                stock.
                <br />
                Preventa Santander Río del 19 al 25 de junio inclusive o hasta
                agotar stock.
                <br />
                <br />
                👉 Disfrutalo en 3 cuotas sin interés de $833 + Service Charge o
                canjeando tus puntos SuperClub.
                <br />
                Además podés comprar tus tickets en efectivo en todos los puntos
                de venta durante todo el período de venta.
                <br />⚠ La venta general comienza el 26 de junio o cuando el
                stock de la preventa Santander Río se agote (lo que suceda
                primero) <br />
                Flow Music XP: una nueva experiencia en Música.
                <br />
                <h2>Photos</h2>
                <div className="gallery" id="gallery">
                  <div className="mb-3 pics animation all 2">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                      alt="Card cap"
                    />
                  </div>

                  <div className="mb-3 pics animation all 1">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
                      alt="Card cap"
                    />
                  </div>

                  <div className="mb-3 pics animation all 1">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
                      alt="Card cap"
                    />
                  </div>

                  <div className="mb-3 pics animation all 2">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                      alt="Card cap"
                    />
                  </div>

                  <div className="mb-3 pics animation all 2">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                      alt="Card cap"
                    />
                  </div>

                  <div className="mb-3 pics animation all 1">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
                      alt="Card cap"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mb-5">
              <h2>Adedd</h2>

              <div className="row">
                <div className="col-1">
                  <img
                    className="img-fluid"
                    src="https://placeholder.com/100x100"
                    alt="placeholder"
                  />
                </div>
                <div className="col-1">
                  <img
                    className="img-fluid"
                    src="https://placeholder.com/100x100"
                    alt="placeholder"
                  />
                </div>
                <div className="col-1">
                  <img
                    className="img-fluid"
                    src="https://placeholder.com/100x100"
                    alt="placeholder"
                  />
                </div>
                <div className="col-1">
                  <img
                    className="img-fluid"
                    src="https://placeholder.com/100x100"
                    alt="placeholder"
                  />
                </div>
                <div className="col-1">
                  <img
                    className="img-fluid"
                    src="https://placeholder.com/100x100"
                    alt="placeholder"
                  />
                </div>
                <div className="col-1">
                  <img
                    className="img-fluid"
                    src="https://placeholder.com/100x100"
                    alt="placeholder"
                  />
                </div>
                <div className="col-1">
                  <img
                    className="img-fluid"
                    src="https://placeholder.com/100x100"
                    alt="placeholder"
                  />
                </div>
                <div className="col-1">
                  <img
                    className="img-fluid"
                    src="https://placeholder.com/100x100"
                    alt="placeholder"
                  />
                </div>
                <div className="col-1">
                  <img
                    className="img-fluid"
                    src="https://placeholder.com/100x100"
                    alt="placeholder"
                  />
                </div>
                <div className="col-1">
                  <img
                    className="img-fluid"
                    src="https://placeholder.com/100x100"
                    alt="placeholder"
                  />
                </div>
                <div className="col-1">
                  <img
                    className="img-fluid"
                    src="https://placeholder.com/100x100"
                    alt="placeholder"
                  />
                </div>
                <div className="col-1">
                  <div className="added-more-content">+35</div>
                </div>
              </div>
            </div>

            <div className="col-6 row">
              <h2 className="col-12">Chekins</h2>
              <div className="col-3 mb-4">
                <img
                  className="img-fluid"
                  src="https://placeholder.com/100x100"
                  alt="placeholder"
                />
              </div>
              <div className="col-3 mb-4">
                <img
                  className="img-fluid"
                  src="https://placeholder.com/100x100"
                  alt="placeholder"
                />
              </div>
              <div className="col-3 mb-4">
                <img
                  className="img-fluid"
                  src="https://placeholder.com/100x100"
                  alt="placeholder"
                />
              </div>
              <div className="col-3 mb-4">
                <img
                  className="img-fluid"
                  src="https://placeholder.com/100x100"
                  alt="placeholder"
                />
              </div>
              <div className="col-3 mb-4">
                <img
                  className="img-fluid"
                  src="https://placeholder.com/100x100"
                  alt="placeholder"
                />
              </div>
              <div className="col-3 mb-4">
                <img
                  className="img-fluid"
                  src="https://placeholder.com/100x100"
                  alt="placeholder"
                />
              </div>
              <div className="col-3 mb-4">
                <img
                  className="img-fluid"
                  src="https://placeholder.com/100x100"
                  alt="placeholder"
                />
              </div>
              <div className="col-3 mb-4">
                <img
                  className="img-fluid"
                  src="https://placeholder.com/100x100"
                  alt="placeholder"
                />
              </div>
              <div className="col-3 mb-4">
                <img
                  className="img-fluid"
                  src="https://placeholder.com/100x100"
                  alt="placeholder"
                />
              </div>
              <div className="col-3 mb-4">
                <img
                  className="img-fluid"
                  src="https://placeholder.com/100x100"
                  alt="placeholder"
                />
              </div>
              <div className="col-3 mb-4">
                <img
                  className="img-fluid"
                  src="https://placeholder.com/100x100"
                  alt="placeholder"
                />
              </div>
              <div className="col-3 mb-4">
                <div className="chekins-more-content">+156</div>
              </div>
            </div>

            <div className="col-6 border-left"></div>
          </div>
        </div>

        <h2>Comentarios</h2>
      </main>
    </>
  );
};

export default Event;
