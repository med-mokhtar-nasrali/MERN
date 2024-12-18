import React from 'react';


const ErrorHandler = () => {
  return (
    <div className="error-container">
      <img
        className="error-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMz0JTdD18-cs9S314yWDXs2K0ZnS3tM0wg&s"
        alt="Error"
      />
      <div className="error-content">
        <h1>Oops! Something went wrong</h1>
        <p>We couldn’t process your request. Please try again later.</p>
        <button className="retry-btn" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorHandler;

