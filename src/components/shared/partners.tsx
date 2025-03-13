import { Container, Title } from "../ui";

const items = [
  {
    img: "/assets/img/adv_1.svg",
  },
  {
    img: "/assets/img/adv_2.svg",
  },
  {
    img: "/assets/img/adv_3.svg",
  },
  {
    img: "/assets/img/adv_4.svg",
  },
  {
    img: "/assets/img/adv_5.svg",
  },

  {
    img: "/assets/img/adv_1.svg",
  },
  {
    img: "/assets/img/adv_2.svg",
  },
  {
    img: "/assets/img/adv_3.svg",
  },
  {
    img: "/assets/img/adv_4.svg",
  },
  {
    img: "/assets/img/adv_5.svg",
  },

  {
    img: "/assets/img/adv_1.svg",
  },
  {
    img: "/assets/img/adv_2.svg",
  },
  {
    img: "/assets/img/adv_3.svg",
  },
  {
    img: "/assets/img/adv_4.svg",
  },
  {
    img: "/assets/img/adv_5.svg",
  },

  {
    img: "/assets/img/adv_1.svg",
  },
  {
    img: "/assets/img/adv_2.svg",
  },
];

export const Partners = () => {
  return (
    <section className="pt-[60px] lg:pt-[80px]" id={"partners"} data-aos="fade-up">
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between mb-[20px] lg:mb-[40px]">
          <Title as={"h2"}>Партнеры</Title>
        </div>
        <div className="flex flex-wrap gap-x-[33px] gap-y-[43px]">
          {items &&
            items.map((item, i) => (
              <div
                className="flex items-center justify-center min-w-[235px] w-[235px] h-[235px] border-2 border-[#f1f1f1] rounded-[1000px] overflow-hidden"
                key={i}
              >
                <img
                  className="h-[145px] w-[145px] object-contain"
                  width={145}
                  height={145}
                  src={item.img}
                  alt="partners img"
                />
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};
