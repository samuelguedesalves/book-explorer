import React from "react";
import { SugestStyles } from "./styles";

const Sugest: React.FC = () => {
  return (
    <SugestStyles>
      <div className="listage">
        <button className="sugestion-item">sugestion...</button>
        <button className="sugestion-item">sugestion...</button>
        <button className="sugestion-item">sugestion...</button>
      </div>
    </SugestStyles>
  );
};

export default Sugest;
