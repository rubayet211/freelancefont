const Navbar = ({ design, template }) => {
  const color = "";
  const concatenate = color.concat(" ", design);
  return <div className={concatenate}> {template} </div>;
};

export default Navbar;
