import React from "react";

export default function Giphy(props) {
  if (props.giphy) {
    return (
      <section className="Giphy">
        <div className="row">
          {props.giphy.data.map(function (giphy, idx) {
            return (
              <div className="col-6 col-sm-3" key={idx}>
                <a
                  href={props.giphy.data[0].url}
                  target="_blank"
                  rel="noreferrer"
                ></a>

                <img
                  src={giphy.images.fixed_width.url}
                  alt="gifs"
                  className="img-fluid  mt-5 mb-5"
                ></img>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
