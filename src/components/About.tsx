import reactIcon from "../assets/img/reactIcon.svg";
import leonam from "../assets/img/leonamPhoto.jpg";

export function About() {
  return (
    <div className="lg:h-auto lg:mt-10" id="about">
      <h1 className="flex items-center justify-center h-40 text-3xl font-bold tracking-wider 	">
        SOBRE MIM
      </h1>

      <main className="flex  flex-col lg:flex-row lg:items-center lg:justify-center gap-12  lg:gap-4">
        <img
          src={leonam}
          className="lg:mr-12 w-[400px] h-[350px] m-auto md:w-[500px] md:h-[500px] rounded border-2 border-orange-500 hover:border-blue-500 transition-all duration-300 ease-linear shadow-lg"
        ></img>

        <div
          className="leading-relaxed text-center lg:text-left flex flex-col justify-center lg:w-[50%]"
          style={{
            backgroundImage: `url(${reactIcon})`,
            height: "750px",
            backgroundPosition: "center ",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <strong className="text-4xl ">
            Eu sou <span className="text-orange-500">Leonam</span>
          </strong>
          <p className="font-thin text-2xl mt-4 tracking-widest drop-shadow-lg shadow-black">
            Desenvolvedor Full stack
          </p>

          <p className="text-gray-200 w-screen lg:max-w-[29rem] font-thin mt-4 mb-10 leading-relaxed">
            Meu contato com a tecnologia começou quando eu tinha 8 anos através
            dos jogos. Desde então, sempre gostei e estava por dentro de tudo
            que acontecia, mas nunca havia programado de verdade. Isso mudou
            quando conheci a Kenzie Academy Brasil que me proporcionou um
            aprendizado robusto em tecnologia. Gosto da área porque me
            proporciona um mar de desafios e novas descobertas,
            consequentemente, me fazendo evoluir constantemente dia após dia.
            Meu objetivo é obter mais conhecimentos teóricos e práticos com a
            finalidade de me tornar um programador Full Stack, além de poder
            contribuir socialmente.
          </p>

          <a
            className="w-[262px] m-auto lg:m-0 shadow-lg rounded p-4 uppercase font-medium tracking-wider text-center border-2 border-orange-500 text-orange-500 hover:border-blue-500  hover:text-blue-500 transition-all duration-300 ease-linear"
            href="https://drive.google.com/file/d/1lq0mlCCJw4y4iNWOdRiDzxphCZNv7FXO/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </main>
    </div>
  );
}
