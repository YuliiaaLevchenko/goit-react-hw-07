import css from "./Error.module.css";

const Error = ({ children }) => {
  return (
    <p className={css.text}>
      <b>{children}</b>
    </p>
  );
}

export default Error