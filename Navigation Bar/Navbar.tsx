"use client";
import { Button } from "@/components/ui/button";
import HamburgerIcon from "./HamburgerIcon";
import {ModeToggle} from "./ThemeToggleButton"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="w-full h-[50px] fixed bg-stone-600/50 dark:bg-stone-900/50 backdrop-blur-lg text-white flex px-3 gap-8 justify-end lg:justify-center items-center">
      {/* Desktop navigation bar */}
      <div className="hidden lg:flex gap-8 justify-center items-center text-sm font-light">
        <a href="#" className="hover:text-blue-300">About</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
        <a href="#">Skills</a>
        <a href="#">Blogs</a>
        <a href="#">Education</a>
        <a href="#">Contact</a>
      </div>
      <ModeToggle />
      {/* Mobile navigation bar */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="transparent">
              <HamburgerIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="h-full w-full lg:hidden">
            <div className="flex flex-col text-xl gap-5">
              <a href="#">About</a>
              <a href="#">Experience</a>
              <a href="#">Projects</a>
              <a href="#">Skills</a>
              <a href="#">Blogs</a>
              <a href="#">Education</a>
              <a href="#">Contact</a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
