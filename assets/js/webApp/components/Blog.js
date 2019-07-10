import React from "react";

const Blog = () => {
  return (
    <div>
      <div id={"blog-section"}>
        <img src={"/img/blogHero.svg"} className={"blog-hero"} />
        <div className="col-md-6 info">
          <div className="pro-wrapper insider">
            <h1>Ben Remeres</h1>
            <h3 className={"pro-header"}>R.I.P Ben Remeres</h3>
            <div className="pro-bio">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, qui eos in quod amet odit aliquam minima labore
              voluptates repellendus mollitia itaque, dolorem architecto quam
              quos. Cum assumenda et distinctio. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quo et ipsum sunt repudiandae.{" "}
              <br /> <br />
              Rerum praesentium vel consequatur magnam reprehenderit quam, illum
              quidem dignissimos ullam enim, mollitia ad nulla saepe nisi. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Corporis, qui
              eos in quod amet odit aliquam minima labore voluptates repellendus
              mollitia itaque, dolorem architecto quam quos.Cum assumenda et
              distinctio.Lorem ipsum dolor sit, amet consectetur adipisicing
              elit.Quo et ipsum sunt repudiandae. <br /> <br />
              Rerum praesentium vel consequatur magnam reprehenderit quam, illum
              quidem dignissimos ullam enim, mollitia ad nulla saepe nisi.
            </div>
          </div>
        </div>

        <div className="col-md-6 model">
          <img src="/img/Remeres.jpg" alt="" className={"ben"} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
