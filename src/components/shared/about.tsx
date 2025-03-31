import { Container, Title } from "../ui";

export const About = () => {
  return (
    <section id={"about"} data-aos="fade-up">
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between mb-[40px] lg:mb-[82px]">
          <Title as={"h2"}>О компании</Title>
          <div className="max-w-[768px] w-full mt-[20px] lg:mt-[45px] font-semibold text-[rgba(0,0,0,.79)]">
            <p className={"text-[16px] lg:text-[28px] mb-[22px] lg:mb-[68px]"}>
              Компания "Status RK" представляет собой одну из ведущих компаний
              на рынке рекламных услуг, объединяющая креативность и
              высококачественное производство.
            </p>
            <p className="text-[14px] lg:text-[20px]">
              Мы предлагаем полный спектр услуг — от разработки концепции
              рекламной кампании до её реализации с использованием самых
              современных технологий.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4 font-semibold mb-[30px] lg:mb-[50px]">
          <div className="flex flex-col items-center justify-center px-[32px] py-[22px] lg:px-[38px] lg:py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <img
              className="h-[165px] w-[310px] mb-[30px] object-contain"
              width={310}
              height={165}
              src={"/assets/img/about_1.svg"}
              alt="about img"
            />
            <Title className="w-full max-w-full" as={"h3"}>
              10+ лет
            </Title>
            <p className="w-full max-w-full">на рынке рекламы</p>
          </div>
          <div className="flex flex-col items-center justify-center px-[38px] py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <img
              className="h-[165px] w-[310px] mb-[30px] object-contain"
              width={310}
              height={165}
              src={"/assets/img/about_2.svg"}
              alt="about img"
            />
            <Title className="w-full max-w-full" as={"h3"}>
              10 000+
            </Title>
            <p className="w-full max-w-full">выполненных проектов</p>
          </div>
          <div className="flex flex-col items-center justify-center px-[38px] py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <img
              className="h-[165px] w-[310px] mb-[30px] object-contain"
              width={310}
              height={165}
              src={"/assets/img/about_3.svg"}
              alt="about img"
            />
            <Title className="w-full max-w-full" as={"h3"}>
              3 дня
            </Title>
            <p className="w-full max-w-full">на изготовление заказа</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-[30px] lg:gap-[94px]">
          <div className="flex flex-col gap-[16px] max-w-[486px] w-full">
            <h3 className="text-[24px] lg:text-[56px] font-medium">
              Цели компании
            </h3>
            <p className="text-[14px] lg:text-[20px] leading-[122%]">
              В компании Status RK мы стремимся к созданию эффективных рекламных
              решений, способствующих устойчивому росту бизнеса наших партнеров.
            </p>
          </div>
          <div className="flex flex-col gap-[16px] w-full">
            <h3 className="text-[24px] lg:text-[56px] font-medium">Задачи</h3>
            <p className="text-[14px] lg:text-[20px] leading-[122%]">
              Оказывать качественные услуги, формировать долгосрочные
              партнерские отношения, внедрять инновационные методы и постоянно
              совершенствовать процесс работы для достижения максимальных
              результатов в рекламе.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
