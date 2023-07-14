import search from "../assets/search.svg";

const FormSearch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("buscando anime");
  };

  return (
    <form
      onClick={handleSubmit}
      className="overflow-hidden flex relative w-full px-3 h-8"
    >
      <input
        placeholder="Search..."
        type="text"
        className="w-full h-full pl-9 rounded-md outline-none"
      />
      <button className="flex absolute left-2 bg-slate-500 h-full w-8 justify-center items-center rounded-s-md">
        <img className="h-5 " src={search} alt="" />
      </button>
    </form>
  );
};

export default FormSearch;
