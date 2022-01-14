import React from "react";
import giphylogo from "./giphylogo.png";
import "./Giphy.css";

export default function Giphy(props) {
  if (props.giphy) {
    return (
      <section className="Giphy">
        <div className="row">
          {props.giphy.data.map(function (giphy, index) {
            return (
              <div className="col-6 col-sm-3" key={index}>
                <a
                  href={props.giphy.data[index].url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={giphy.images.fixed_width.url}
                    alt="gifs"
                    className="img-fluid  mt-5 mb-25"
                  ></img>
                </a>
              </div>
            );
          })}
        </div>

        <img src={giphylogo} className="giphy-logo" alt="giphy logo" />
      </section>
    );
  } else {
    return null;
  }
}
