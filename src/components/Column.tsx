type ColumnProps = {
  column: {
    title: string;
    body: string;
    color: string;
    icon: string;
  };
};
const Column = (props: ColumnProps) => {
  const { title, body, color, icon } = props.column;
  const colors: { [key: string]: string } = {
    orange: "bg-bright-orange text-bright-orange",
    cyan: "bg-dark-cyan text-dark-cyan",
    "dark-cyan": "bg-very-dark-cyan text-very-dark-cyan",
  };
  return (
    <div
      className={`${colors[color]} p-12 flex flex-col items-start gap-10 font-lexend-decca text-[15px]`}
    >
      <div>
        <img src={`./${icon}.svg`} alt="" />
      </div>
      <h2 className="font-big-shoulders text-4xl text-[--light-gray]">
        {title}
      </h2>
      <p className="text-[--trans-white] opacity-80 leading-relaxed">{body}</p>
      <button className="mt-auto h-[50px] w-[150px] rounded-full flex items-center justify-center bg-[--light-gray] border-2 border-[--light-gray] hover:bg-[transparent] hover:text-[--light-gray] transition duration-300 ">
        Learn More
      </button>
    </div>
  );
};

export default Column;
