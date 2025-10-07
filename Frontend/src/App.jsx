import React, { useState } from 'react';
import UrlForm from './component/urlform';
import UrlList from './component/urlList';

const App = () => {
  const [urls, setUrls] = useState([]);

  const handleNewUrl = (urlObj) => {
    setUrls((prev) => [urlObj, ...prev]);
  };

  const containerStyle = {
    maxWidth: "1100px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  };

  const headingStyle = {
    marginBottom: "20px",
    color: "#333"
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>URL Shortener</h2>
      <UrlForm onNewUrl={handleNewUrl} />
      <UrlList urls={urls} />
    </div>
  );
};

export default App;
