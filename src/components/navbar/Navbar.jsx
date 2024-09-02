import logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'
const Navbar = () => {
  return (
    <div>
      <div className="navbar backdrop-blur-xl fixed top-0 left-0 z-10">
        <div className="flex-1 w-[20%]">
          <a className="btn btn-ghost text-black text-2xl content-center">
            <img src={logo} className='w-[4rem] h-[4rem] inline-block' alt="logo" />
            <span className='leading-5 text-center'>Shawon <br /> <small> <small>Drinks Shop</small> </small></span>
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input bg-transparent input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end bg-transparent">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle avatar bg-transparent"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={profile}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-[white] dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
