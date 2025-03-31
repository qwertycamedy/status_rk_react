import { Autoplay, Navigation } from "swiper/modules";
import { Container, Title } from "../ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import { useRef } from "react";
import { SliderNav } from "./slider_nav";

const items = [
  { img: "/assets/img/logo.png" },
  ...Array.from({ length: 54 }, (_, i) => ({
    img: `/assets/img/logo-${i + 1}.png`,
  })),
];

export const Partners = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section
      className="pt-[60px] lg:pt-[80px]"
      id={"partners"}
      data-aos="fade-up"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-[20px] lg:mb-[40px]">
          <Title as={"h2"}>Партнеры</Title>
          <SliderNav swiperRef={swiperRef} />
        </div>
      </Container>
      <Swiper
        className="w-[calc(100%+40px)] xl:w-full xl:left-0 !px-[20px] xl:!px-0"
        modules={[Autoplay, Navigation]}
        navigation={true}
        grabCursor={true}
        loop={true}
        speed={600}
        autoplay={{
          delay: 700,
          waitForTransition: true,
        }}
        slidesPerView={"auto"}
        initialSlide={0}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: {
            centeredSlides: false,
            spaceBetween: 10,
          },
          768: {
            centeredSlides: true,
            spaceBetween: 33,
          },
        }}
      >
        {items.map((item, i) => (
          <SwiperSlide
            className="max-w-[83px] lg:max-w-[225px]"
            key={item.img + String(i)}
          >
            <div
              className="flex items-center justify-center w-[83px] h-[83px] lg:w-[225px] lg:h-[225px] border-2 border-[#f1f1f1] rounded-[1000px] overflow-hidden"
              key={i}
            >
              <img
                className="h-[56px] w-[56px] lg:w-[150px] lg:h-[150px] object-contain"
                src={item.img}
                alt="partner"
                width={56}
                height={56}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
