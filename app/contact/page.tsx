import Main from "@/components/containers/Main";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <span>
        <label className="block" htmlFor="header">
          Header
        </label>
        <input id="header" type="text" />
      </span>
      <span>
        <label className="block" htmlFor="header">
          Header
        </label>
        <textarea name="" id="" cols={30} rows={10}></textarea>
      </span>
    </div>
  );
};

export default page;
