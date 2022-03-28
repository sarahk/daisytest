// this is a component because eventually it'll have a search form built with appropriate functionality
export function NavBarSearch() {
  return (
    <div className="hidden md:form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered"
      />
    </div>
  );
}