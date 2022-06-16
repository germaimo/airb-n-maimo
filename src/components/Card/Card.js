import React from "react";

const Card = ({ hotel }) => {
  const { name, photo, description, country, price, rooms } = hotel;
  return (
    <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={
                photo.charAt(0) !== '.' ? photo : 'https://via.placeholder.com/150'
                } alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left"></div>
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">{country}</p>
            </div>
          </div>

          <div className="content">
            <p>{description}</p>
            <p>Precio: {price}</p>
            <p>Cant. Habitaciones: {rooms}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
