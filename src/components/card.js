import data from "../data/db.json";

export default function Card() {
  const datafeatured = data.featured;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-6 md:space-y-0 space-y-6 font-inter text-default text-secondary-vdrblue py-10">
      {datafeatured.map((item, index) => (
        <div key={index} className="grid col-span-1 grid-cols-2 gap-7">
          <div className="col-span-1">
            <img src={item.img} alt="digital-item"className="object-cover h-full max-h-40 md:max-h-none w-full " />
          </div>
          <div className="flex flex-col justify-between hover:cursor-pointer hover:text-primary-red transition-colors duration-300">
            <div className="font-bold text-secondary-grblue text-3xl">
              0{index + 1}
            </div>
            <div className="font-extra text-xl">{item.title}</div>
            <div>{item.highlight}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
