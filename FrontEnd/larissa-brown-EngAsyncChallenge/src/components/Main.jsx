import React from "react"

export default function Main(){
    return(
        <div className="tableContainer">
        <div className="coachImage">
        </div>
        <div className="currentTable">
          <h2 className="currentCoaches">Current Coaches</h2>
          <div className="table">
            <div className="column">Coach Name
              <div className="row">Jessica D.</div>
              <div className="row">David F.</div>
              <div className="row">Keir Y.</div>
            </div>
            <div className="column">Available Starting
              <div className="row">11/6/22</div>
              <div className="row">8/5/21</div>
              <div className="row">4/12/22</div>
            </div>
            <div className="column">Industry
              <div className="row">Professional Services</div>
              <div className="row">Sports/Fitness</div>
              <div className="row">E-Sports</div>
            </div>
          </div>
        </div> 
      </div>
    )
}