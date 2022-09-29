import NavItem from "./navItem.component";

const NavCategory = () => {
  const navItemArr = [
    "all categories",
    "accessories",
    "smartphone",
    "computer",
    "gaming equipment",
    "tv & monitors",
    "headphones",
    "speaker",
  ];
  return (
    <div style={{
        boxShadow: '2px 4px 8px rgb(0,0,0,0.2)'
    }}>
      <div
        className="d-flex justify-content-between py-3 text-capitalize f-6 container"
        style={{
          overflowX: "scroll",
          width: 'fitContent'
        }}
      >
        {navItemArr.map((item, idx) => (
          <NavItem key={idx} item={item} />
        ))}
        <span className="d-none d-md-block" style={{
            fontSize: 10,
            width: 100
        }}>
          <i
            className="fa-solid fa-fire"
            style={{
              color: "red",
            }}
          ></i>
          Hot deals
        </span>
      </div>
    </div>
  );
};

export default NavCategory;
