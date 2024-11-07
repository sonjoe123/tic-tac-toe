import React from "react";
import { Link } from "react-router-dom";
import j1 from "../img/j1.jpg";
import j2 from "../img/j2.jpg";
import j3 from "../img/j3.jpg";
import j4 from "../img/j4.jpeg";
import j5 from "../img/j5.png";
import j6 from "../img/j6.webp";

const journalEntries = [
  {
    image: j1,
    name: "j1",
    heading: "Journal 1",
    description: `This is a detailed description for Journal 1. 
    It contains multiple lines,
    indents, and proper formatting.`,
  },
  {
    image: j2,
    name: "j2",
    heading: "Journal 2",
    description: `This is a detailed description for Journal 2.
    Another line of text here.`,
  },
  {
    image: j3,
    name: "j3",
    heading: "Journal 3",
    description: `This is a detailed description for Journal 3.
    Further information can be added here.`,
  },
  {
    image: j4,
    name: "j4",
    heading: "Journal 4",
    description: `This is a detailed description for Journal 4.
    More details and specifics can be included.`,
  },
  {
    image: j5,
    name: "j5",
    heading: "Journal 5",
    description: `This is a detailed description for Journal 5.
    Add any relevant information as needed.`,
  },
  {
    image: j6,
    name: "j6",
    heading: "Journal 6",
    description: `This is a detailed description for Journal 6.
    More content can be described here.`,
  },
];

export const Journal = () => {
  return (
    <div className="journal-container">
      {journalEntries.map((entry, index) => (
        <div key={index} className="image-wrapper animated-image">
          <Link to={`/journal/${entry.name}`}>
            <img
              src={entry.image}
              alt={entry.heading}
              className="journal-image"
            />
          </Link>
          <h3 className="journal-heading">{entry.heading}</h3>
        </div>
      ))}
    </div>
  );
};
