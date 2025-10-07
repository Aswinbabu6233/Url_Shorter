import React, { useState } from 'react';
import api from "../Api/api";

const UrlForm = ({ onNewUrl }) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/shorten", { originalUrl });
      const shortened = "http://localhost:5000/" + res.data.shortcode;

      setShortUrl(shortened);
      setOriginalUrl("");
      onNewUrl({ originalUrl, shortenedUrl: shortened });
    } catch (error) {
      alert("Failed to shorten the URL");
    }
  };

  const formStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  };

  const inputStyle = {
    padding: "10px",
    width: "70%",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "10px",
    fontSize: "16px"
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px"
  };

  const shortUrlStyle = {
    marginTop: "10px",
    color: "#28a745",
    wordBreak: "break-all"
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          value={originalUrl}
          placeholder="Enter URL"
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Shorten</button>
      </form>
      {shortUrl && <p style={shortUrlStyle}>Shortened URL: {shortUrl}</p>}
    </div>
  );
};

export default UrlForm;
