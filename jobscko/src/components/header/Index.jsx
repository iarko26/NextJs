"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function Header({ user, profileInfo }) {
  // Define menu items dynamically based on user and profileInfo
  const menuItems = [
    { label: "Home", path: "/", show: true },
    { label: "Feed", path: "/feed", show: profileInfo },
    { label: "Login", path: "/sign-in", show: !user },
    { label: "Register", path: "/sign-up", show: !user },
    { label: "Activity", path: "/activity", show: profileInfo?.role === "candidate" },
    { label: "Companies", path: "/companies", show: profileInfo?.role === "candidate" },
    { label: "Jobs", path: "/jobs", show: profileInfo },
    { label: "Memberships", path: "/memberships", show: profileInfo },
    { label: "Accounts", path: "/accounts", show: profileInfo },
  ];

  return (
    <div>
      <header className="flex w-full shrink-0 h-16 items-center">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <AlignJustify className="w-6 h-6" size="24" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-2 p-6">
                {menuItems
                  .filter((item) => item.show)
                  .map((item) => (
                    <Link
                      key={item.label}
                      href={item.path}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <UserButton
            afterSignOutUrl="/"
            showName={false}
            
            appearance={{
              baseTheme: "dark",
              elements: {
                userButton: "w-full h-full",
                userButtonPopover: "w-96",
                userButtonPopoverCard: "w-96",
                userButtonPopoverFooter: "hidden",
              },
              variables: {
                colorScheme: "dark",
              },
            }}
          />
            
              </div>
              </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <Link href="/" className="hidden font-bold text-3xl lg:flex mr-6">
          JOBSCKO
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6 items-center">
          {menuItems
            .filter((item) => item.show)
            .map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="group inline-flex h-9 w-max items-center rounded-md px-4 py-2 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          {/* User Button */}
          <UserButton
            afterSignOutUrl="/"
            showName={false}
            
            appearance={{
              baseTheme: "dark",
              elements: {
                userButton: "w-full h-full",
                userButtonPopover: "w-96",
                userButtonPopoverCard: "w-96",
                userButtonPopoverFooter: "hidden",
              },
              variables: {
                colorScheme: "dark",
              },
            }}
          />
        </nav>
      </header>
    </div>
  );
}

export default Header;