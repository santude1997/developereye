import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <span className="text-6xl font-bold gradient-text mb-4">404</span>
      <h1 className="text-2xl font-semibold text-slate-900 mb-2">
        Page Not Found
      </h1>
      <p className="text-slate-500 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button size="lg">
          <FiHome size={16} aria-hidden="true" /> Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
