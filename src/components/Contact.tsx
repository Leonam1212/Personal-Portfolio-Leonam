import { useEffect, useRef } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import ScrollReveal from "scrollreveal";

import reactIcon from "../assets/img/reactIcon.svg";

interface InfoContactProps {
  icon: any;
  text: string;
  content: string;
  link: string;
}

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 500,
      });
    }
  }, []);
  return (
    <div id="contact" className="h-screen mt-24 flex flex-col justify-between">
      <header className="flex items-center justify-center  text-3xl font-bold tracking-wider ">
        CONTATO
      </header>

      <main
        ref={sectionRef}
        className="my-20 md:my-0 flex flex-col md:flex-wrap items-center justify-center gap-10 md:gap-1 "
        style={{
          backgroundImage: `url(${reactIcon})`,
          height: "650px",
          backgroundPosition: "center right ",
          backgroundRepeat: "no-repeat",
          backgroundSize: "700px",
        }}
      >
        <div className="flex flex-col items-start gap-8">
          <InfoContact
            icon={<FaMapMarkerAlt size={40} />}
            text="Localização"
            link="https://www.google.com/maps/place/Vila+Velha+-+Ibes,+Vila+Velha+-+ES/@-20.4283265,-40.5153917,11z/data=!3m1!4b1!4m5!3m4!1s0xb817b2995d6bf1:0xf69aa51e4ff904b1!8m2!3d-20.3518079!4d-40.3079697"
            content="Vila Velha, ES"
          />

          <InfoContact
            icon={<HiOutlineMail size={40} />}
            text="Email"
            link="https://outlook.live.com/mail/0/"
            content="leonam_5000@hotmail.com"
          />

          <InfoContact
            icon={<BsGithub size={40} />}
            text="GitHub"
            link="https://github.com/Leonam1212"
            content="@Leonam1212"
          />

          <InfoContact
            icon={<FaLinkedinIn size={40} />}
            text="Linkedin"
            link="https://www.linkedin.com/in/leonam-rodrigues/"
            content="Leonam Rodrigues"
          />

          <InfoContact
            icon={<GrInstagram size={40} />}
            text="Instagram"
            link="https://www.instagram.com/byleowatch/"
            content="@byleowatch"
          />
        </div>

        <div className="flex flex-col items-start text-center md:text-left leading-relaxed gap-6">
          <strong className="text-3xl uppercase text-center md:text-left w-full ">
            Leonam Rodrigues
          </strong>
          <span className="md:text-xl uppercase tracking-widest w-full">
            Desenvolvedor Full Stack
          </span>
          <p className="md:text-2xl m-auto text-gray-200">
            Obrigado por chegar até aqui!
            <br />
            Entre em contato comigo por qualquer
            <br />
            um dos meios de comunicação ao lado
            <br /> e não se esqueça de baixar o meu CV.
          </p>
          <a
            className="w-[262px] m-auto md:m-0 shadow-lg rounded p-4 md:mt-6 uppercase font-bold tracking-wider text-center border-2 border-orange-500 text-orange-500 hover:bg-orange-500  hover:text-gray-100 transition-all duration-300 ease-linear"
            href="https://drive.google.com/file/d/1lq0mlCCJw4y4iNWOdRiDzxphCZNv7FXO/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </main>

      <footer className="bg-[rgba(0,0,0,0.3)] h-14 text-sm md:text-lg text-center font-semibold flex justify-center items-center">
        <span>© Copyright Portfólio Leonam. Todos os Direitos Reservados</span>
      </footer>
    </div>
  );
}

const InfoContact = ({ icon, text, content, link }: InfoContactProps) => (
  <div className="flex justify-center items-center gap-5 group">
    <span className="group-hover:text-orange-500 transition-colors duration-300 ease-linear">
      {icon}
    </span>
    <a
      href={link}
      target="_blank"
      className="flex flex-col group-hover:text-orange-500 transition-colors duration-300 ease-linear"
    >
      <strong className="uppercase">{text}</strong>
      <span className="text-gray-200">{content}</span>
    </a>
  </div>
);
