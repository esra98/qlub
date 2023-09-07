import React from 'react'

interface Rating {
    Source: string;
    Value: string;
}
  
interface RatingsListProps {
    ratings: Rating[];
}

const ratingImages: Record<string, string> = {
    "Internet Movie Database": "/imdb-icon.png",
    "Metacritic": "/metacritic-icon.png",
    "Rotten Tomatoes": "/rotten-tomatoes.png",
  };

const DetailRatings: React.FC<RatingsListProps> = ({ ratings }) => {
    return (
      <div>
        <ul>
          {ratings?.map((rating, index) => (
            <li key={index} style={{ display: 'flex', marginRight: '10px', marginTop:'10px'}}>
              {ratingImages[rating.Source] && (
                <img
                  src={ratingImages[rating.Source]}
                  alt={`${rating.Source} Icon`}
                  style={{ marginRight: '8px', width: '24px', height: '24px' }}
                />
              )}
              <strong>{rating.Source}:</strong> {rating.Value}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default DetailRatings