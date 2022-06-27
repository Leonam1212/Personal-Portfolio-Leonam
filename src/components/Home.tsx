import bgHome from "../assets/img/homeBg.svg";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
export function Home() {
  return (
    <div
      id="home"
      className="bg-fixed"
      style={{
        backgroundImage: `url(${bgHome})`,
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="md:ml-60 m-auto absolute top-[50%] left-[50%] translate-x-[-50%] md:left-0 md:translate-x-0 translate-y-[-50%] flex flex-col text-center md:text-left md:items-start items-center">
        <div className="leading-loose">
          <p className="font-thin md:text-3xl text-2xl tracking-wider drop-shadow-lg shadow-black">
            Hello world,
          </p>
          <strong className="md:text-6xl text-3xl tracking-wider drop-shadow-lg shadow-black">
            Leonam Rodrigues
          </strong>
          <p className="font-thin md:text-3xl text-2xl tracking-widest drop-shadow-lg shadow-black">
            Desenvolvedor Full stack
          </p>
        </div>
        <nav className="flex mt-4 gap-6">
          <a
            href="https://www.google.com/maps/place/Vila+Velha+-+Ibes,+Vila+Velha+-+ES/@-20.4283265,-40.5153917,11z/data=!3m1!4b1!4m5!3m4!1s0xb817b2995d6bf1:0xf69aa51e4ff904b1!8m2!3d-20.3518079!4d-40.3079697"
            target="_blank"
          >
            <FaMapMarkerAlt
              size={38}
              className="hover:text-orange-500 transition-all duration-300 ease-linear"
            />
          </a>

          <a href="https://www.instagram.com/byleowatch/" target="_blank">
            <GrInstagram
              size={38}
              className="hover:text-orange-500 transition-all duration-300 ease-linear"
            />
          </a>
          <a href="https://github.com/Leonam1212" target="_blank">
            <BsGithub
              size={38}
              className="hover:text-orange-500 transition-all duration-300 ease-linear"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/leonam-rodrigues/"
            target="_blank"
          >
            <FaLinkedin
              size={38}
              className="hover:text-orange-500 transition-all duration-300 ease-linear"
            />
          </a>
        </nav>

        <a
          className="w-[262px] shadow-lg rounded p-4 mt-6 uppercase font-bold tracking-wider text-center border-2 border-orange-500 text-orange-500 hover:bg-orange-500  hover:text-gray-100 transition-all duration-300 ease-linear"
          href="https://drive.google.com/file/d/1lq0mlCCJw4y4iNWOdRiDzxphCZNv7FXO/view?usp=sharing"
          target="_blank"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
