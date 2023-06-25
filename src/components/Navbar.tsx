import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "gishka-library";
import { NavLink, useLocation } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useFetchPortals } from "../../hooks/reactQuery/useFetchSlug";

export const Navbar = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: (isDarkMode: boolean) => void;
}) => {
  const pathname = useLocation().pathname;
  const { data /* , isInitialLoading, isError */ } = useFetchPortals();
  const currentSlug = data?.docs?.find((doc) => pathname.includes(doc.slug));
  return (
    <header className={`flex justify-between py-2 ${isDarkMode ? "dark" : "light"}`}>
      <NavigationMenu className="mx-4 lg:px-20 md:mx-16">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p>{currentSlug?.name ?? "Velg kategori"}</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="top-2">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {data?.docs.map((doc) => (
                  <li key={doc.slug}>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to={doc.slug}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{doc.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{doc.description}</p>
                      </NavLink>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-5 justify-center items-center mx-4 lg:px-20 md:mx-16">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/22791561?v=4" alt="Image of a handsome guy" />
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        {/* The DarkModeSwitch library has bad accessibility - Added extra button to support keyboard */}
        <button onClick={() => toggleDarkMode(!isDarkMode)}>
          <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={24} />
        </button>
      </div>
    </header>
  );
};
