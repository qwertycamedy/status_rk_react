import { RefObject } from "react";
import { Swiper as SwiperType } from "swiper";

export const SliderNav = ({
  swiperRef,
}: {
  swiperRef: RefObject<SwiperType | null>;
}) => {
  return (
    <div className="hidden lg:flex gap-[22px]">
      <button
        className="flex items-center justify-center text-black bg-transparent w-[80px] h-[80px] rounded-full border-2 border-[#ccc] cursor-pointer"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <img
          className="w-[36px] h-[36px]"
          src="/assets/img/ico_arrow-prev.svg"
          alt="img"
          width={36}
          height={36}
        />
      </button>
      <button
        className="flex items-center justify-center text-black bg-transparent w-[80px] h-[80px] rounded-full border-2 border-[#ccc] cursor-pointer"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <img
          className="w-[36px] h-[36px]"
          src="/assets/img/ico_arrow-next.svg"
          alt="img"
          width={36}
          height={36}
        />
      </button>
    </div>
  );
};
