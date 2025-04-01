import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Swiper as SwiperType } from "swiper";

import { Navigation } from "swiper/modules";
import { RefObject } from "react";

const works = [
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.06.59 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.06.59.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.07.00 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.07.00 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.07.00 (3).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.07.00.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.07.01 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.07.01.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.09.38 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.09.38.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.09.39 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.09.39 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.09.39.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.09.40 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.09.40 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.09.40 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-02-08 at 13.09.40.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.39 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.40 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.40 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.40 (3).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.40.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.41 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.41 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.41.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.42 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.42 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.42.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.43 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.43 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.43.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.44.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.57 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.57.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.58 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.58 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.58.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.59 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.59 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.37.59.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.00 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.00 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.00.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.01 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.01.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.14 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.14 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.14.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.15 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.15 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.15.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.16 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.16 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.16.jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.17 (1).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.17 (2).jpeg",
  },
  {
    img: "/assets/img/WhatsApp Image 2025-03-04 at 13.38.17.jpeg",
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
      className="w-[calc(100%+40px)] xl:w-full xl:left-0 !px-[20px] xl:!px-0"
      modules={[Navigation]}
      navigation={true}
      grabCursor={true}
      loop={true}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={"auto"}
      initialSlide={0}
      breakpoints={{
        320: {
          centeredSlides: false,
          spaceBetween: 10,
        },
        768: {
          centeredSlides: true,
          spaceBetween: 16,
        },
      }}
    >
      {duplicatedWorks?.map((work, i) => (
        <SwiperSlide
          className="max-w-[146px] lg:max-w-[212px]"
          key={work.img + String(i)}
        >
          <div className="flex flex-col items-center text-center gap-[10px] xl:gap-[14px] font-semibold">
            <img
              className="rounded-[20px] xl:rounded-[29px] max-w-[212px] w-[146px] h-[231px] xl:h-[336px] flex lg:w-full"
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
