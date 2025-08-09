import Link from "next/link";
import React, { useState } from "react";
import { useWindowSize } from "react-use";
import { cn } from "~/lib/utils";
import {
  Button,
  buttonVariants,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "..";
import ScrollProgress from "../ScrollProgress";
import { getMenu } from "~/data/nav";
import GitHubButton from "./GitHubButton";
import HamburgerButton from "./HamburgerMenu";
import MenuItem from "./MenuItem";
import MobileMenu from "./MobileMenu";
import RightClickBrandLogo from "./RightClickBrandLogo";

interface Props {
  hideNavbar: boolean;
  stickyNavbar?: boolean;
}

const Nav = ({ hideNavbar, stickyNavbar = true }: Props) => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);
  const menu = getMenu();

  React.useEffect(() => {
    if (open) {
      // Prevent scrolling on mount
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  // Close mobile menu when desktop
  React.useEffect(() => {
    if (width >= 1024) setOpen(false);
  }, [width]);

  if (hideNavbar) {
    return null;
  }

  return (
    <div
      className={cn("sticky top-0 z-40 transform")}
      style={{ transform: "translate3d(0,0,999px)" }}
    >
      <div
        className={cn(
          "absolute inset-0 h-full w-full bg-background/90 dark:bg-background/95",
        )}
      />
      <nav
        className={cn(
          `relative z-40 border-default border-b backdrop-blur-sm transition-opacity`,
        )}
      >
        <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
          <div className="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
            <div className="flex items-center">
              <div className="flex items-center flex-shrink-0">
                <RightClickBrandLogo />
              </div>
              <NavigationMenu
                delayDuration={0}
                className="hidden pl-8 sm:space-x-4 lg:flex h-16"
                viewportClassName="rounded-xl bg-background"
              >
                <NavigationMenuList>
                  {menu.primaryNav.map((menuItem) =>
                    menuItem.hasDropdown ? (
                      <NavigationMenuItem
                        className="text-sm font-medium"
                        key={menuItem.title}
                      >
                        <NavigationMenuTrigger
                          className={cn(
                            buttonVariants({ type: "text", size: "small" }),
                            "!bg-transparent hover:text-brand-link data-[state=open]:!text-brand-link data-[radix-collection-item]:focus-visible:ring-2 data-[radix-collection-item]:focus-visible:ring-foreground-lighter data-[radix-collection-item]:focus-visible:text-foreground px-2 h-auto",
                          )}
                        >
                          {menuItem.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {menuItem.dropdown}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem
                        className="text-sm font-medium"
                        key={menuItem.title}
                      >
                        <NavigationMenuLink asChild>
                          <MenuItem
                            href={menuItem.url}
                            title={menuItem.title}
                            className="group-hover:bg-transparent text-foreground focus-visible:text-brand-link"
                            hoverColor="brand"
                          />
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ),
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center gap-2 opacity-0 animate-fade-in !scale-100 delay-300">
              <GitHubButton />

              <Button type="default" className="hidden lg:block" asChild>
                <Link href="https://cloud.paybill.dev">Sign in</Link>
              </Button>
              <Button className="hidden lg:block" asChild>
                <Link href="https://cloud.paybill.dev">Start your project</Link>
              </Button>
            </div>
          </div>
          <HamburgerButton toggleFlyOut={() => setOpen(true)} />
        </div>
        <MobileMenu open={open} setOpen={setOpen} menu={menu} />
      </nav>

      <ScrollProgress />
    </div>
  );
};

export default Nav;
