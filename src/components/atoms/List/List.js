export const List = ({ className = "", style, children, Type = "ul" }) => {
  return (
    <Type className={`${className}`} style={style}>
      {children}
    </Type>
  );
};

export default List;
