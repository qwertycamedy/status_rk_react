import { useRef } from "react";
import { Container, Title } from "../ui";
import { WorksSlider } from "./works_slider";
import { Swiper as SwiperType } from "swiper";
import { WorksNav } from "./works_nav";

export const Works = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="pt-[60px] lg:pt-[80px]" id="works" data-aos="fade-up">
      <Container>
        <div className="flex items-center justify-between mb-[22px] lg:mb-[40px]">
          <Title as={"h2"}>Примеры работ</Title>
          <WorksNav swiperRef={swiperRef} />
        </div>
      </Container>
      <WorksSlider swiperRef={swiperRef} />
    </section>
  );
};
