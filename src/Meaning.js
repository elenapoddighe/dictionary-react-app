import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition:</strong> {props.meaning.definition}
          <br />
          <Example example={props.meaning.example} />
        </p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
