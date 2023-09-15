import {
  BiLogoFacebook,
  BiLogoLinkedinSquare,
  BiLogoWhatsapp,
  BiLogoYoutube,
} from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="md:h-[712px] bg-[url('/home/abdullah/Figma_to_Web/figma_to_design/src/Images/homebottomshadow.svg')] bg-no-repeat bg-[cover]">
        <div className=" h-full w-full flex items-center justify-center">
          <div className=" text-center lg:w-[50%] md:space-y-6 space-y-2">
            <h1 className="font-semibold text-3xl lg:text-[50px]">
              A Price To Suit Everyone
            </h1>
            <p className=" text-xs lg:px-0 px-5  lg:text-sm text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              sint laborum quas blanditiis, accusantium placeat voluptatibus eum
              dolores? Voluptatum porro quam corporis est pariatur, totam
              facilis placeat minima dolores reiciendis itaque, aliquid repellat
              harum delectus accusamus? Sequi mollitia tempore unde?
            </p>
            <div>
              <h1 className="font-semibold text-[50px] hover:text-green-600 duration-500">
                $50
              </h1>
              <p>UI Design kit</p>
            </div>
            <div className=" space-y-4">
              <h2>See, One price simple</h2>
              <Button content="Purchase UI Kit" />
            </div>
          </div>
        </div>

        <div className="md:h-[200px] bg-[#E7ECFF] py-5  w-full space-y-4">
          <div className=" md:space-y-5 md:flex items-center justify-around">
            <div className="flex space-x-4  font-bold items-center justify-center">
              <h1>&copy;2023 </h1>
              <h1> Your Company</h1>
            </div>
            <div>
              <h1 className=" text-[#2245E3] text-center  font-bold text-3xl font-mono capitalize">
                Landing
              </h1>
            </div>
            
          </div>
          <div className=" md:text-lg">
            <ul className="flex space-x-11 items-center justify-center md:text-[50px]">
              <FooterIcons
                hrefLink="https://www.facebook.com/abdullahalsazib22"
                MIcon={<BiLogoFacebook />}
              />
              <FooterIcons
                hrefLink="https://www.linkedin.com/in/abdullah-al-sazib-a79102244"
                MIcon={<BiLogoLinkedinSquare />}
              />
              <FooterIcons
                hrefLink="https://github.com/Abdullahalsazib"
                MIcon={<AiFillGithub />}
              />
              <FooterIcons
                hrefLink="+8801746085207"
                MIcon={<BiLogoWhatsapp />}
              />
              <FooterIcons
                hrefLink="https://www.youtube.com"
                MIcon={<BiLogoYoutube />}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

export function Button(props) {
  return (
    <>
      <button
        className="text-center hover:bg-green-700 duration-300  bg-[#111B47] text-white w-[250px] h-[49px]
         font-semibold rounded-sm"
      >
        {props.content}
      </button>
    </>
  );
}

export function FooterIcons(FIcons) {
  return (
    <>
      <li>
        <a href={FIcons.hrefLink}>{FIcons.MIcon}</a>
      </li>
    </>
  );
}
//
//>
