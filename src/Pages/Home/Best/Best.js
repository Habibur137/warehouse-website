import React from "react";
import video from "../../../images/video.jpg";

const Best = () => {
  return (
    <div style={{ backgroundColor: "#DEE7F9" }} className="pb-4 pt-1">
      <div class="container px-4 my-5">
        <h3>HOW WE BEST FOR YOU</h3>
        <div class="row gx-5">
          <div class="col-12 col-lg-6">
            <img style={{ width: "100%" }} src={video} alt="" />
          </div>
          <div class="col-12 col-lg-6">
            <h4>
              Ghurnek has been standing on the trust of customers for the last
              10 years
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
              eligendi consectetur laboriosam qui optio illo provident impedit,
              vero nisi commodi delectus pariatur eum mollitia excepturi
              temporibus aspernatur, repudiandae animi. Quaerat sit rem
              doloremque repellat tenetur mollitia quae, provident quasi
              voluptatibus ducimus velit excepturi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
