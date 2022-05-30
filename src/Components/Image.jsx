import "../app.css";

export const Image = (props) => {
  const { src, alt, borderRadius, width, height, fit } = props;
  return (
    <div>
      <img className="img" src={src} alt={alt} borderRadius={borderRadius}
       width={width} height={height} fit={fit} />
    </div>
  );
};
