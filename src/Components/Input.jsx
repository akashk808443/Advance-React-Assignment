import "../app.css";
export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (
    <div className="input">
      {/* Add Right Logo */}
      <input
        type={type}
        onChange={(e) => onChange(e)}
        className={`input ${size || "md"} ${variant || "flushed"}`}
        placeholder={variant}
      />
      <img
        src={rightLogo}
        alt="rightLogo"
        height="10px"
        onClick={() => rightLogoOnClick()}
      />
    </div>
  );
};