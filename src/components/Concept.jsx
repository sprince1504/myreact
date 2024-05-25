import "./concept.css";

export default function Concepts ({name, designation}) {
    return (
      <li>
        <h1>{name}</h1>
        <h2>{designation}</h2>
      </li>
    );
  }