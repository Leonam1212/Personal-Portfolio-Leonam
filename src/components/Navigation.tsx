import {
  Atom,
  EnvelopeSimpleOpen,
  House,
  Lightning,
  User,
} from "phosphor-react";

import { Link } from "react-scroll";

interface NavigationIconProps {
  icon: any;
  text: string;
}

export function Navigation() {
  return (
    <header
      className="hidden bottom-0 w-screen gap-1 md:fixed md:top-0 md:left-0 md:h-screen md:w-28 md:m-0
                lg:flex md:flex-col justify-center md:items-center"
    >
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <NavigationIcon icon={<House size={28} />} text="Home" />
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
      >
        <NavigationIcon icon={<User size={28} />} text="Sobre" />
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
      >
        <NavigationIcon icon={<Atom size={28} />} text="Habilidades" />
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
      >
        <NavigationIcon icon={<Lightning size={28} />} text="Projetos" />
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
      >
        <NavigationIcon
          icon={<EnvelopeSimpleOpen size={28} />}
          text="Contato"
        />
      </Link>
    </header>
  );
}

const NavigationIcon = ({ icon, text }: NavigationIconProps) => (
  <div className="navigation-icon group">
    {icon}

    <span className="navigation-tooltip group-hover:scale-100">{text}</span>
  </div>
);
