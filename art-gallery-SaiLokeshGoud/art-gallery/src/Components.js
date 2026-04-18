import React, { useState } from 'react';
import artsData from './ArtsData';

export function Gallery() {
  const [arts, setArts] = useState(artsData);

  const handleBuy = (id) => {
    setArts((prevArts) =>
      prevArts.map((art) =>
        art.id === id && art.stock > 0
          ? { ...art, stock: art.stock - 1 }
          : art
      )
    );
  };

  return (
    <div className="gallery-wrap">
      {arts.map((art) => (
        <ArtCard key={art.id} art={art} onBuy={handleBuy} />
      ))}
    </div>
  );
};

export function ArtCard({ art, onBuy }) {
  return (
    <div className="art-card">
      <h2>{art.title}</h2>
      <img className="art-image" src={art.image} alt={art.title} />
      <p className="artist-name">
        <strong>By:</strong> {art.artist}
      </p>
      <p className="description">{art.description}</p>
      <div className="price-stock">
        <p className="price">
          <strong>Price:</strong> ${art.price}
        </p>
      </div>
      <div className="buy-stock-container">
        <button
          className="buy-button"
          onClick={() => onBuy(art.id)}
          disabled={art.stock === 0}
        >
          {art.stock > 0 ? 'Buy' : 'Sold Out'}
        </button>
        <p className="stock-left">
          <strong>Stock:</strong> {art.stock} left
        </p>
      </div>
    </div>
  );
};
