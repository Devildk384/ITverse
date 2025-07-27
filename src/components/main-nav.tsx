"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ToggleTheme } from "./theme-toggle";
import LogoImage from "@/public/logo.webp";
import Image from "next/image";

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky shadow-md top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex gap-2 items-center">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
         <Link href="/" className="flex items-center space-x-2">
          <Image
            src={LogoImage}
            alt="Syslence Logo"
            width={200}
            height={60}
            className="w-[150px] h-[60px] md:w-[200px] md:ml-0 -ml-[20px] md:h-[60px] object-contain"
          />
        </Link>

        </div>

        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
              pathname.endsWith("/") && "text-blue-600"
            )}
          >
            Home
          </Link>
          <Link
            href="/who-we-are"
            className={cn(
              "text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
              pathname.endsWith("/who-we-are") && "text-blue-600"
            )}
          >
            Who We Are
          </Link>
          <Link
            href="/what-we-offer"
            className={cn(
              "text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
              pathname.endsWith("/what-we-offer") && "text-blue-600"
            )}
          >
            What We Offer
          </Link>
          <Link
            href="/portfolio"
            className={cn(
              "text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
              pathname.endsWith("/portfolio") && "text-blue-600"
            )}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
              pathname.endsWith("/contact") && "text-blue-600"
            )}
          >
            Contact Us
          </Link>
        </nav>
        <div className="flex gap-2 items-center">
          <Button
            asChild
            className="bg-gradient-to-r text-white from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
          >
            <Link href="/book-consultation">Book a Consultation</Link>
          </Button>
          <ToggleTheme />
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background shadow-lg md:hidden">
            <nav className="container flex flex-col py-4 space-y-3">
              <Link
                href="/"
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/who-we-are"
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Who We Are
              </Link>
              <Link
                href="/what-we-offer"
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                What We Offer
              </Link>
              <Link
                href="/portfolio"
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
