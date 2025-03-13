import { Container, MyLink, Title } from "../ui";

export const Hero = () => {
  return (
    <section className="pb-[72px]">
      <div className="pt-[150px] mb-5 xl:pt-[218px] pb-[20px] xl:pb-0 rounded-b-[28px] lg:rounded-b-[58px] bg-gradient-to-t from-[rgba(255,255,255,0.08)] to-transparent overflow-hidden">
        <Container>
          <Title as={"h1"}>Делаем ваш бренд заметным</Title>
        </Container>
      </div>
      <Container className="flex items-center justify-center flex-col animate-show">
        <ul className="w-full mb-[66px] lg:mb-[38px] flex justify-between gap-4">
          <li className="flex gap-2">
            <span className="mt-[4px] bg-[#fff] rounded-full min-w-[11px] w-[11px] h-[11px] lg:w-[13px] lg:h-[12px]" />
            <span>Кокшетау, ул. Александра Пушкина, 46</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-[4px] bg-[#fff] rounded-full min-w-[11px] w-[11px] h-[11px] lg:w-[13px] lg:h-[12px]" />
            <span>Рекламное агентство полного цикла</span>
          </li>
        </ul>
        <div className="max-w-[350px] flex flex-col items-center justify-center gap-[17px] lg:gap-[26px]">
          <Title className="max-w-[250px] lg:max-w-[100%] text-center font-semibold" as={"h4"}>
            Профессиональный подход к вашему проекту
          </Title>
          <MyLink
            className="text-[16px] !py-[15px] !px-[25px]"
            variant="bg-light"
            href="/#contacts"
          >
            Связаться с нами
          </MyLink>
        </div>
      </Container>
    </section>
  );
};
