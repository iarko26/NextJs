import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black py-6 border-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Section */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Jobscko. All rights reserved.
          </div>

          {/* Center Section */}
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
              Contact Us
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;