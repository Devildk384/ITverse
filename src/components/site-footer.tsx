import Link from "next/link";
import { Mail, Phone, Globe, Linkedin, Twitter, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 border-t border-blue-200">
      <div className="container py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ml-[15px] mr-[15px]">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold">
                IT
              </div>
              <span className="font-bold text-xl">Syslence</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Custom web application systems for small and medium-sized businesses in India.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/who-we-are"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-offer"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  What We Offer
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>info@syslence.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>+91 8887931189</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>www.syslence.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">
                Subscribe to our newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm border border-blue-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 ml-[15px] mr-[15px]">
            © 2025 Syslence. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0 ml-[15px] mr-[15px]">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
