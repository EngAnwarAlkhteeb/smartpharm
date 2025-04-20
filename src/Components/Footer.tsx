import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      {/* Main Content */}
      <main>
        <h1>Welcome to SmartPharm</h1>
        <p>Your AI-Powered Treatment Companion</p>
      </main>

      {/* Footer */}
      <footer className="text-center mt-5">
        <p>&copy; 2023 SmartPharm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer; // Export the App component
