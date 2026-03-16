import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // 404 — unknown route
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-gradient-red">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Η σελίδα δεν βρέθηκε</p>
        <a href="/" className="inline-flex items-center gap-2 text-primary font-semibold underline hover:text-primary/90">
          Επιστροφή στην Αρχική
        </a>
      </div>
    </div>
  );
};

export default NotFound;
