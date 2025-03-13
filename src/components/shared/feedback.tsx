import { Container, Title } from "../ui";
import { FeedbackForm } from "./feedback_form";

export const Feedback = () => {
  return (
    <section id='contacts' className="pb-[91px] lg:pb-[254px]">
      <Container className="max-w-[1140px]">
        <div className="flex flex-col items-center text-center mb-[35px]">
          <Title className="mb-[20px] lg:mb-0 leading-[92%] lg:leading-[150%]" as={"h2"}>Остались вопросы?</Title>
          <p className="text-[14px] lg:text-[16px] max-w-[256px] lg:max-w-[360px]">
            Оставьте свои данные и наш менеджер свяжется с вами в ближайшее
            время
          </p>
        </div>
        <FeedbackForm />
      </Container>
    </section>
  );
};
