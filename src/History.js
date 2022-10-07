import React from "react";

function History() {
  return (
    <div>
      <h1> History of New Hope Initiative</h1>
      <div className="history">
        <div className="loc-history">
          <h3>Penda Project</h3>
          <p>
            Kenya is home to the majority of our projects. Specifically, we
            mainly work in the slum of Kibera (one of the world's largest) in
            Nairobi.
          </p>
          <p>
            Here we help bring education, health, safety, work, and hope through
            our projects: the New Hope Academy, the Kibera Penda Project, and
            Project Biashara. Learn more about each of these projects and how
            you can get involved by clicking the links below.
          </p>
        </div>
        <div className="loc-history">
          <h3>New Hope Academy</h3>
          <p>
            In the midst of the massive Kibera slum, New Hope Initiative
            operates an elementary school for over 500 children. The cornerstone
            of this work is a feeding center funded by The Met Church in
            Houston,TX which feeds these children two meals a day 6 days a week.
          </p>
          <p>
            This school although residing in a slum is far from a typical slum
            school. The facilities are very nice and are being constantly
            upgraded. The education the children receive prepares them for their
            secondary school entrance exam and the promise for all of our New
            Hope students is that Kibera Penda Project will completely fund
            their secondary school education if they pass the entrance exam.
          </p>
        </div>
        <div className="loc-history">
          <h3>Biashara Project</h3>
          <p>
            Project Biashara began in 2009 as a way to help women living in
            Kibera, one of the world's largest slums, earn an income and provide
            for their families.{" "}
          </p>
          <p>
            What started as a micro loan project to help these women start small
            businesses has quickly developed into a full-time jewelry making
            co-op, employing more than 30 women from the Kibera slums.
          </p>
        </div>
      </div>

      <div className="outLinks">
        <div className="foreign left">
          <a className="foreign" href="http://www.kiberapendaproject.com/">
            Penda Project
            <img
              src="https://static.spacecrafted.com/f9326f2bffae4b19ac5c625ae87e8b2e/i/b22fcc3eacab4ca9bd722f25ba60774b/1/5feFb8zhrk/white.png"
              width="200px"
              height="50px"
              alt=""
            />
          </a>
        </div>
        <div className="foreign centre">
          <a
            className="foreign"
            href="https://newhopeinitiative.org/projects/kenya/new-hope-academy"
          >
            New Hope Academy
            <img
              alt="nhi"
              src="https://images.squarespace-cdn.com/content/v1/558d39b9e4b0e691293e6050/1445956596810-2W33JH00Z27WXZ5B5KFM/newhopelogo-edited-white.png?format=1500w"
              width="150px"
              height="50px"
            />
          </a>
        </div>
        <div className="foreign right">
          <a className="foreign" href="https://projectbiashara.org/">
            Biashara
            <img
              src="https://cdn.shopify.com/s/files/1/0374/7101/t/3/assets/logo.png?v=143475703999969975911392836679"
              alt=""
              width="100px"
              height="50px"
            />
          </a>
        </div>
        <br />

        <br />
      </div>
    </div>
  );
}

export default History;
