import { gql, useQuery } from "@apollo/client";

const GET_PROJECTS_QUERY = gql`
  query {
    projects {
      id
      name
      siteUrl
      coverImage {
        url
      }
    }
  }
`;
interface GetProjectsQueryResponse {
  projects: {
    id: string;
    name: string;
    siteUrl: string;
    coverImage: {
      url: string;
    };
  }[];
}

interface ProjectProps {
  coverImage: string;
  title: string;
  siteUrl: string;
}

export function Projects() {
  const { data } = useQuery<GetProjectsQueryResponse>(GET_PROJECTS_QUERY);

  if (!data) {
    return <div>CARREGANDO...</div>;
  }

  return (
    <div id="projects" className="h-auto w-screen">
      <header className="flex flex-col items-center justify-center h-40 text-3xl font-bold tracking-wider leading-relaxed my-10	">
        MEUS PROJETOS
        <p className="font-thin text-center">Conheça meus projetos</p>
      </header>

      <main className="flex md:h-auto md:max-w-[85%] m-auto  justify-center flex-wrap gap-12">
        {data?.projects.map((project) => {
          return (
            <Project
              key={project.id}
              title={project.name}
              siteUrl={project.siteUrl}
              coverImage={project.coverImage.url}
            />
          );
        })}
      </main>
    </div>
  );
}

const Project = ({ title, siteUrl, coverImage }: ProjectProps) => (
  <div
    className=" bg-cover h-52 w-[26rem] bg-no-repeat bg-center rounded-2xl shadow-lg group "
    style={{
      backgroundImage: `url(${coverImage})`,
    }}
  >
    <a
      href={siteUrl}
      target="_blank"
      className="flex justify-center items-center rounded-2xl h-full group-hover:bg-orange-500 invisible group-hover:visible transition-colors duration-300 ease-linear"
    >
      <strong className="text-xl font-semibold uppercase tracking-wider">
        {title}
      </strong>
    </a>
  </div>
);
