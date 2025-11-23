/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const StrategiesList = ({ strategies }) => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {strategies.map((strategiesItem, index) => (
                <div
                  className={`item ${
                    index === strategies.length - 1 ? "" : "mb-80"
                  }`}
                  key={strategiesItem.id}
                >
                  <div className="img">
                    <img src={strategiesItem.image} alt="" />
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <h4 className="title">{strategiesItem.title}</h4>
                        <p>{strategiesItem.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategiesList;
