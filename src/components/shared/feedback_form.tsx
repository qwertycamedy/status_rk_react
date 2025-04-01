import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Input, Label } from "../ui";
import { clsx } from "clsx";

const loadStatus = {
  loading: "loading",
  success: "success",
  error: "error",
};

export const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", tel: "" });
  const [status, setStatus] = useState<string | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(loadStatus.loading);

    try {
      const response = await fetch("backendApiUrl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus(loadStatus.success);
        setFormData({ name: "", email: "", tel: "" });
        alert("Сообщение успешно отправлено!");
      } else {
        alert(
          "Ошибка отправки!\n\nПерезагрузите сайт и попробуйте еще раз или позвоните нам по номеру +7(701)-706-76-66"
        );
        setStatus(loadStatus.error);
      }
    } catch (e) {
      setStatus(loadStatus.error);
      console.log("error submit: ", e);
    }
  };

  return (
    <form
      className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-5"
      onSubmit={onSubmit}
    >
      <Label label="Ваше имя">
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Как к вам обращаться?"
          required
          className="w-full p-2 border rounded"
        />
      </Label>
      <Label label="Ваш E-mail">
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Ваш E-mail"
          required
          className="w-full p-2 border rounded"
        />
      </Label>
      <Label label="Номер телефона">
        <Input
          type="tel"
          name="tel"
          value={formData.tel}
          onChange={onChange}
          placeholder="+7 XXX XXX XX XX"
          required
          className="w-full p-2 border rounded"
        />
      </Label>
      <Button
        variant="light"
        className={clsx("text-nowrap py-[18px] px-[47px]", {
          "pointer-events-none bg-red-400": status === loadStatus.error,
          "pointer-events-none bg-blue-400": status === loadStatus.loading,
          "pointer-events-none bg-green-400": status === loadStatus.success,
        })}
      >
        {status === null && "Отправить запрос"}
        {status === loadStatus.error && "Ошибка"}
        {status === loadStatus.loading && "Загрузка..."}
        {status === loadStatus.success && "Отправлено!"}
      </Button>
    </form>
  );
};
