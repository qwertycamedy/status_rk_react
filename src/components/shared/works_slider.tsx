import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Swiper as SwiperType } from "swiper";

import { Navigation } from "swiper/modules";
import { RefObject } from "react";

const works = [
  {
    img: "/assets/img/works_1.jpg",
  },
  {
    img: "/assets/img/works_2.jpg",
  },
  {
    img: "/assets/img/works_3.jpg",
  },
  {
    img: "/assets/img/works_4.jpg",
  },
  {
    img: "/assets/img/works_5.jpg",
  },
  {
    img: "/assets/img/works_6.jpg",
  },
];

const duplicatedWorks = [
  ...works,
  ...works,
  ...works,
  ...works,
  ...works,
  ...works,
  ...works,
  ...works,
  ...works,
];

export const WorksSlider = ({
  swiperRef,
}: {
  swiperRef: RefObject<SwiperType | null>;
}) => {
  return (
    <Swiper
      className="w-[calc(100%+40px)] xl:w-full -left-[20px] xl:left-0 !px-[20px] xl:!px-0"
      modules={[Navigation]}
      navigation={true}
      grabCursor={true}
      loop={true}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={"auto"}
      centeredSlides={true}
      initialSlide={0}
      spaceBetween={16}
    >
      {duplicatedWorks?.map((work, i) => (
        <SwiperSlide className="max-w-[212px]" key={work.img + String(i)}>
          <div className="flex flex-col items-center text-center gap-[10px] xl:gap-[14px] font-semibold">
            <img
              className="rounded-[20px] xl:rounded-[29px] max-w-[212px] w-[146px] flex xl:w-full"
              src={work.img}
              alt="work"
              width={212}
              height={336}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
