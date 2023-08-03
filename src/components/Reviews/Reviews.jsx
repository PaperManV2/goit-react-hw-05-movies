import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/movieAPI';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={styles.reviews}>
      <h2>Recenzje</h2>
      {reviews.length === 0 ? (
        <p>Brak recenzji do wyświetlenia.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>Autor: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
