const NavItem = ({ item }) => {
  // console.log(item);
  return <div className="me-1 text-nowrap" style={{
    width: '100px',
    textAlign: 'center',
    fontSize: '10px'
  }}>{item}</div>;
};
export default NavItem;
