import React from 'react';

const UrlList = ({ urls = [] }) => {
  const listContainerStyle = {
    textAlign: "left"
  };

  const listItemStyle = {
    padding: "8px 0",
    borderBottom: "1px solid #eee"
  };

  const linkStyle = {
    color: "#007BFF",
    textDecoration: "none",
    wordBreak: "break-all"
  };

  const headingStyle = {
    marginBottom: "10px",
    color: "#333"
  };

  return (
    <div style={listContainerStyle}>
      <h2 style={headingStyle}>Shortened URLs</h2>
      <ul>
        {urls.map((url, index) => (
          <li key={index} style={listItemStyle}>
            <a href={url.shortenedUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              {url.shortenedUrl}
            </a> - Original: {url.originalUrl}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
