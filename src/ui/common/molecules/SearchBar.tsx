import { Search } from "lucide-react"; // Make sure to install lucide-react

const SearchBar = () => {
  return (
    <div className="block relative  max-w-sm">
      <input
        type="text"
        placeholder="Search products..."
        className=" pl-10 pr-4 py-2 text-lg text-white  border-b-2 border-white "
      />
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
        size={20}
      />
    </div>
  );
};

export default SearchBar;
