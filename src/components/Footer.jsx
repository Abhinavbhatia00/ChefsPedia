const Footer = () => {
  return (
    <footer>
      <button
        className="flex h-10 w-full cursor-pointer items-center justify-center border-t border-black/10 bg-orange-200 text-sm font-light text-gray-900 hover:bg-orange-100 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      >
        Back to top
      </button>

      <div className="flex min-h-12 items-center justify-center bg-orange-400 px-4 py-2 text-center">
        <p className="text-sm font-light text-gray-950 sm:text-base">
          © 2026 ChefsPedia. Discover, cook and enjoy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
