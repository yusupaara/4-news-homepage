import bannerwide from "../images/image-web-3-desktop.jpg";
import bannersquare from "../images/image-web-3-mobile.jpg";
import data from "../data/db.json";

export default function Newsmain() {
  return (
    <div className="grid lg:grid-cols-2 text-default font-inter text-secondary-vdrblue h-full">
      <div className="lg:col-span-2 pb-4">
        <img
          src={bannerwide}
          alt="banner-dekstop"
          className="hidden sm:block object-cover h-full"
        />
        <img src={bannersquare} alt="banner-mobile" className="sm:hidden" />
      </div>
      <div className="grid lg:grid-cols-2 lg:col-span-2 lg:space-x-6">
        <div className="lg:col-span-1 text-5xl flex items-center font-extra h-full pb-4 md:pb-0">
          {data.main.title}
        </div>
        <div className="lg:col-span-1 grid justify-between space-y-4 h-full">
          <div className="pr-0 sm:pr-12 lg:pr-0">{data.main.highlight}</div>
          <div className="bg-primary-red text-secondary-ofwhite tracking-[.3em] font-bold justify-self-start self-end py-3 px-6 inline-flex hover:bg-secondary-vdrblue hover:cursor-pointer active:bg-secondary-drblue active:cursor-pointer transition-colors duration-300">
            READ MORE
          </div>
        </div>
      </div>
    </div>
  );
}
