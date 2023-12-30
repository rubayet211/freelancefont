const Navbar = ({ design, template }) => {
  const color = "bg-[#20bc74]";
  const concatenate = color.concat(" ", design);
  return <div className={concatenate}> {template} </div>;
};

export default Navbar;
