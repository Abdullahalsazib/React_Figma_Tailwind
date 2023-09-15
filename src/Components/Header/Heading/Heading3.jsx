import React from "react";

export default function Heading3(props) {
  return (
    <>
      <div className="  lg:h-[742px] text-center  lg:flex items-center justify-around">
        <div className="flex lg:block items-center justify-center">

        <img className="w-[50%] lg:w-[105%]" src={props.Img3} alt="" />
        </div>
        <div className="lg:w-[40%] space-y-2  lg:space-y-5 px-4 lg:px-0">
          <h1 className="  font-semibold text-3xl lg:text-[50px]">{props.titleText}</h1>
          <p className="  border-y-fuchsia-300 text-xs lg:text-sm text-slate-500">
            Lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Perspiciatis laborum suscipit quaerat pariatur iure nostrum,
            quis dolore rem dignissimos illo, aperiam blanditiis ullam saepe ad
            itaque unde! Voluptatum consequatur corporis quisquam dolor! Optio,
            consequatur eum eaque suscipit mollitia quam, consectetur labore ab
            aspernatur omnis in quod illo doloremque beatae laborum! dolor sit
            amet consectetur adipisicing elit. Totam animi dicta, quibusdam
            repellendus enim voluptate assumenda nam excepturi, reiciendis sed,
            temporibus nihil provident odio delectus non nemo. Itaque, error
            sint!
          </p>
        </div>
      </div>
    </>
  );
}
