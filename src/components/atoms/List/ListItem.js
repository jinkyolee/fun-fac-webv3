export const ListItem = ({ className = "", style, children }) => {
  return (
    <li className={`box ${className}`} style={style}>
      {children}
    </li>
  );
};

export default ListItem;
