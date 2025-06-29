"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sujit Portfolio. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-red-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
