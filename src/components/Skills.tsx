import { useEffect, useRef } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ScrollReveal from "scrollreveal";

interface SkillProgressProps {
  tech: string;
  percent: number;
}

export function Skills() {
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
    <div id="skills" className="h-auto">
      <header className="flex flex-col text-center items-center justify-center h-40 text-3xl font-bold tracking-wider leading-relaxed my-12	">
        MINHAS HABILIDADES
        <p className="font-thin  text-center">
          Saiba as tecnologias que domino e que também estou aprendendo
        </p>
      </header>

      <main
        ref={sectionRef}
        className="flex md:max-w-[70%] overflow-x-scroll justify-left  md:overflow-hidden items-center md:justify-center w-full h-96 m-auto md:h-auto  gap-24 md:flex-wrap"
      >
        <SkillProgress tech="HTML" percent={95} />
        <SkillProgress tech="CSS" percent={60} />
        <SkillProgress tech="JAVASCRIPT" percent={85} />
        <SkillProgress tech="TYPESCRIPT" percent={70} />
        <SkillProgress tech="REACT" percent={85} />
        <SkillProgress tech="TAILWIND CSS" percent={30} />
        <SkillProgress tech="VUEJS" percent={10} />

        <SkillProgress tech="NODEJS" percent={75} />
        <SkillProgress tech="PYTHON" percent={60} />
        <SkillProgress tech="FLASK" percent={75} />
        <SkillProgress tech="DJANGO" percent={65} />
        <SkillProgress tech="POSTGRESQL" percent={60} />
        <SkillProgress tech="MONGODB" percent={40} />
        <SkillProgress tech="NESTJS" percent={30} />
        <SkillProgress tech="SCRUM" percent={60} />
      </main>
    </div>
  );
}

const SkillProgress = ({ tech, percent }: SkillProgressProps) => (
  <div className="w-32 md:w-36 flex flex-col justify-center font-semibold items-center gap-6 text-gray-200 ">
    <CircularProgressbar
      value={percent}
      text={`${percent}%`}
      styles={buildStyles({
        pathColor: "rgb(255, 154, 38)",
        trailColor: "transparent",
        textColor: "#ffff",
      })}
    />
    <span className="font-bold text-center w-screen tracking-widest">
      {tech}
    </span>
  </div>
);
