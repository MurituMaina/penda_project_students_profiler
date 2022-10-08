import React from "react";
import SlideShow from "./SlideShow";
import wheel from "./images/wheel.png";


function Home({ verses }) {
  return (
    <div>
      <div className="home">
        <h1>Penda project Students</h1>

        <p>
          Kibera Penda Project has been around for over a decade. Over this
          period many students who went to New Hope Kibera School have had the
          opportunity to go to through school through the suport of well
          wishers.
        </p>
        <p>
          Over time, many have gone ahead and can be able to track their Status
          in terms of progress and what they engage with and where they are in
          school or even work.
        </p>
        <img alt="wheel" src={wheel} className="wheel" />
      </div>
      <div>
        <SlideShow verses={verses} />
      </div>
    </div>
  );
}

export default Home;
