import { Container, Title } from "../ui";

const items = [
  {
    img: "/assets/img/adv_1.svg",
    title: "Индивидуальный подход",
    text: "Каждому партнеру разрабатываются уникальные решения с учетом специфики бизнеса.",
  },
  {
    img: "/assets/img/adv_2.svg",
    title: "Высокое качество услуг",
    text: "Отличный результат в дизайне, производстве световых инсталляций, полиграфии и сувенирной продукции",
  },
  {
    img: "/assets/img/adv_3.svg",
    title: "Оперативное выполнение",
    text: "Быстрый запуск проектов без потери качества.",
  },
  {
    img: "/assets/img/adv_4.svg",
    title: "Широкий спектр услуг",
    text: "Комплексный подход позволяет решить все задачи по продвижению бренда в одном месте.",
  },
  {
    img: "/assets/img/adv_5.svg",
    title: "Положительные отзывы",
    text: "Высокий рейтинг (4.7 на 2ГИС) подтверждает надежность и эффективность нашей работы.",
  },
];

export const Advantages = () => {
  return (
    <section
      className="pt-[60px] lg:pt-[80px]"
      id={"advantages"}
      data-aos="fade-up"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between mb-[20px] lg:mb-[40px]">
          <Title as={"h2"}>Преимущества</Title>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4">
          {items &&
            items.map((item, i) => (
              <div
                className="flex flex-col px-[30px] py-[22px] lg:px-[30px] lg:py-[20px] w-full border border-[#ccc] rounded-[28px]"
                key={i}
              >
                <div className="flex items-center justify-center w-[72px] h-[72px] mb-[45px] bg-[#f1f1f1] rounded-[100px]">
                  <img
                    className="h-[35px] w-[35px] object-contain"
                    width={35}
                    height={35}
                    src={item.img}
                    alt="advantages img"
                  />
                </div>
                <h3 className="text-[16px] lg:text-[20px] font-semibold leading-[105%] mb-[8px] lg:mb-[14px]">
                  {item.title}
                </h3>
                <p className="text-[12px] lg:text-[15px] text-[rgba(0,0,0,0.7)]">
                  {item.text}
                </p>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};
