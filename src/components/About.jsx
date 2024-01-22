import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full text-white pt-32"
    >
      <div style={{margin:"0 100px 0 100px"}} className="h-full px-4 mx-auto flex flex-col justify-center">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500" style={{color:"#E2DCC8"}}>
            About
          </p>
        </div>

        <p className="text-xl mt-10" style={{color:"#f6f4ed",opacity:"0.5"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum!
        </p>

        <br />

        <p className="text-xl" style={{color:"#f6f4ed",opacity:"0.5"}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </p>
      </div>
    </div>
  );
};

export default About;
