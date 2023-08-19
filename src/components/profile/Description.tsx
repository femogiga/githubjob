import style from "./css/profile.module.css";

const Description = ({ decription }) => {
  return <article className={`${style.description}`}>{decription}</article>;
};

export default Description;
