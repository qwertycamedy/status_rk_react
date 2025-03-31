import { Container, Title } from "../ui";

export const Services = () => {
  return (
    <section
      className="pt-[60px] lg:pt-[80px]"
      id="services"
      data-aos="fade-up"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between mb-[20px] lg:mb-[40px]">
          <Title as={"h2"}>Наши услуги</Title>
          <div className="max-w-[768px] w-full mt-0 lg:mt-[45px] font-semibold text-[rgba(12, 12, 11, 0.8)]">
            <p className="text-[14px] lg:text-[20px] mt-[6px] lg:mt-[40px]">
              Полный цикл услуг от концепции до реализации с передовыми
              технологиями
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col items-center justify-center p-[28px] lg:px-[38px] lg:py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <Title
              className="w-full max-w-full mb-[22px] lg:mb-[28px] font-semibold flex-1"
              as={"h4"}
            >
              Световые вывески
            </Title>
            <p className="w-full max-w-full leading-[177%] font-semibold">
              Световые вывески — яркий и надёжный способ выделить ваш бизнес.
              Изготавливаем лайтбоксы, объёмные буквы, неон и другие решения под
              ваш стиль. Работаем “под ключ”: замер, дизайн, монтаж, поддержка.
              Качественные материалы и технологии — для яркости, долговечности и
              безопасности.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-[28px] lg:px-[38px] lg:py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <Title
              className="w-full max-w-full mb-[22px] lg:mb-[28px] font-semibold flex-1"
              as={"h4"}
            >
              Полиграфические услуги
            </Title>
            <p className="w-full max-w-full leading-[177%] font-semibold">
              Полный спектр печатной продукции для эффективного продвижения
              Вашего бренда: визитки, буклеты, флаеры, плакаты и прочее.
              Используя современные технологии, мы гарантируем высокое качество
              печати, оперативное выполнение заказов и индивидуальный дизайн,
              позволяющий выделиться на рынке.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-[28px] lg:px-[38px] lg:py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <Title
              className="w-full max-w-full mb-[22px] lg:mb-[28px] font-semibold flex-1"
              as={"h4"}
            >
              Услуги дизайнера
            </Title>
            <p className="w-full max-w-full leading-[177%] font-semibold">
              Комплексные дизайнерские решения для Вашего бизнеса: от разработки
              логотипов и фирменного стиля до создания рекламных макетов. Наши
              специалисты применяют креативный подход и современные технологии
              для создания уникальных визуальных концепций, которые помогут Вам
              выделиться на рынке и эффективно передать ценности Вашего бренда.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-[28px] lg:px-[38px] lg:py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <Title
              className="w-full max-w-full mb-[22px] lg:mb-[28px] font-semibold flex-1"
              as={"h4"}
            >
              Сувенирная продукция
            </Title>
            <p className="w-full max-w-full leading-[177%] font-semibold">
              Широкий выбор корпоративных сувениров для усиления узнаваемости
              бренда: Брелоки, ручки, футболки, кружки, блокноты и другие
              подарки. Используя современные технологии и индивидуальный подход,
              мы создаем уникальные и качественные продукты, которые помогут
              эффективно донести ценности Вашего бренда до аудитории.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
