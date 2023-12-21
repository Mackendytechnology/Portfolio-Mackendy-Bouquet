import git from "../../../../assets/git-icon.png";

export const ProjectCard = ({ name, description, link }) => {
  return (
    <li>
      <div>
        <h3 className="type3">{name}</h3>
        <p className="tab">{description}</p>
        <a className="url" href={link} target="_blank">
          Know More
        </a>
      </div>
      <img src={git} alt={name} />
    </li>
  );
};
