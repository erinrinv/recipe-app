import React, { useEffect, useState } from "react";
import * as RecipeAPI from "../api";

const RecipeModal = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className ="modal-content">
          <div className ="modal-header">
            <h2>RECIPE TITLE</h2>
            <span className ="close-btn">
              &times;
            </span>
          </div>
          <p>RECCIPE SUMMARY</p>
        </div>
      </div>
    </>
  );
}

export default RecipeModal;