import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import mainLogo from '../../Assets/mainLogo.png'
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";

export function Sidenav({ brandImg, brandName, routes }) {



  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };


  const location = useLocation();

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >
      <div
        className={`relative border-b ${
          sidenavType === "white" ? "" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-4 py-6 px-8">
          {/* <Avatar src={brandImg} size="sm" /> */}
         
            <img src={mainLogo} style={{width:'165px',height:'50px'}} className="img-fluid w-100" alt="" />
        
        </Link>
        <IconButton
          variant="button"
          color="black"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-dark" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "white" ? "black" : "black"}
                  className="font-black uppercase opacity-75"
                >
                  ko
                  {title}
                </Typography>
              </li>
            )}
            {pages.filter(obj => !['sign in','sign up','choseCompaign','addCompaign','adSet','adSetTwo','adsDetails','Schedule','Targeting','Analytics','Tutorials'].includes(obj.name)).map(({ icon, name, path }) => {
              const isActive = location.pathname === `/${layout}${path}`; // Check if the current location matches the page path

              return (
                <li key={name}>
                  <NavLink to={`/${layout}${path}`}>
                    {() => (
                      <Button
                        variant={isActive ? "gradient active" : "text"} // Apply different variant for active link
                        color={
                          isActive
                            ? sidenavColor
                            : sidenavType === "white"
                            ? "black"
                            : "black"
                        }
                        className={`flex items-center gap-4 px-4 capitalize ${
                          isActive ? "font-semibold" : "" // Apply different styling for active link
                        }`}
                        fullWidth
                      >
                        {icon}
                        <Typography
                          color="black"
                          className="font-medium capitalize"
                        >
                          {name}
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Prospective Solutions",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
