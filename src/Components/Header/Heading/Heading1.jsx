import { Button } from "./Footer";

export default function Heading1() {
  return (
    <>
      <div className=" w-full h-screen capitalize bg-[url('/home/abdullah/Figma_to_Web/figma_to_design/src/Images/svg1-home.svg')] bg-[right_0px] bg-no-repeat">
        <div className=" text-left flex items-center justify-center  h-screen">
          <div className=" space-y-8 w-[90%] lg:w-[65%] ">
            <div>
              <h1 className=" text-2xl lg:text-[50px] font-semibold font-mono capitalize">
                Introduce Your Product
              </h1>
              <h1 className=" text-2xl lg:text-[50px] font-semibold font-mono capitalize">
                quickly & effectively
              </h1>
            </div>
            <div className=" space-y-2 lg:w-[55%]">
              <p className=" sm:text-[16px] text-sm text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum magni possimus facere quasi tempore natus, ipsam nemo
                quidem eligendi voluptates ratione! Iste id perspiciatis beatae
                itaque culpa ipsam reiciendis facere?
              </p>
              <p className=" sm:text-[15px] text-sm text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti, ullam!
              </p>
            </div>
            <div className=" lg:space-y-0 space-y-2 lg:space-x-3 sm:space-x-5   ">
              <Button content="Purchase UI Kit"/>
              <Button content="Learn More"/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
