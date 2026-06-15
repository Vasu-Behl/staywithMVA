function Loader({ hidden }) {
  return (
    <div className={`loader ${hidden ? "loader--hidden" : ""}`} aria-hidden="true">
      <div className="loader__mark">
        <span>MVA</span>
        <i />
      </div>
      <div className="loader__meta">
        <span>Delhi / North Campus</span>
        <span>Loading your next chapter</span>
      </div>
    </div>
  );
}

export default Loader;
