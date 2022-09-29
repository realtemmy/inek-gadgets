const NavItem = ({ item }) => {
  // console.log(item);
  return <div className="me-1 d-none d-md-block text-nowrap" style={{
    width: '100px',
    textAlign: 'center',
    fontSize: '10px'
  }}>{item}</div>;
};
export default NavItem;
