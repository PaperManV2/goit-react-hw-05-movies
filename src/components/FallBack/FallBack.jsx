import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './FallBack.module.css';

const GoBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  const isMovieDetailsPage =
    location.pathname.match(/^\/movies\/\d+$/) ||
    location.pathname.match(/^\/movies\/\d+\/cast$/) ||
    location.pathname.match(/^\/movies\/\d+\/reviews$/);

  if (!isMovieDetailsPage) {
    return null;
  }

  return (
    <button className={styles.fallback} onClick={handleGoBack}>
      Back
    </button>
  );
};

export default GoBackButton;
