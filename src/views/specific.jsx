const Specific = ({ name, display, setClose }) => {
  return (
    <section
      className={`absolute bg-neutral-900 bg-opacity-60 top-0 left-0 min-h-screen min-w-full p-5 flex items-center justify-center  md:p-10 ${display}`}
      onClick={setClose}
    >
      <div className="h-[85vh] w-full bg-neutral-800 text-center rounded p-5">
        <h2 className="text-lg font-bold">{name}❤️‍🩹</h2>
        <article>sum stuv</article>
      </div>
    </section>
  );
};

export default Specific;
