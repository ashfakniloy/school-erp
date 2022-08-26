function FullPageLoader() {
  return (
    <div className="absolute bg-slate-100 left-1/2 top-1/2 p-5 z-40">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default FullPageLoader;
