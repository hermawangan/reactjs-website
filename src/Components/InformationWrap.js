import React from "react";
import Information from "./Information";

function InformationWrap() {
  return (
    <>
      <section className="information-section">
        <Information
          title="Why Us?"
          paragrpah="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro."
          image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?cs=srgb&dl=pexels-sam-kolder-2387873.jpg&fm=jpg"
        />
        <Information
          title="Fast and Reliable"
          paragrpah="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error fugiat ducimus cumque ut ipsam at vitae exercitationem consequatur asperiores veniam, quam ea. Enim aliquam dignissimos quidem officiis minus incidunt. Eveniet!"
          image="images/img-10.jpg"
        />
        <Information
          title="Low cost"
          paragrpah="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad, suscipit consequuntur ipsum eligendi nihil odio! Non cum, aspernatur optio pariatur perspiciatis, et beatae earum tempora placeat dolor modi quis?"
          image="images/img-home.jpg"
        />
      </section>
    </>
  );
}

export default InformationWrap;
