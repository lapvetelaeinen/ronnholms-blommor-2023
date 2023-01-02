import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


export default function Contact() {
  const router = useRouter();
  const [message, setMessage] = useState(null);
  const [error, setError] = useState({ type: "", msg: "" });

  const createBooking = async (params) => {
    await axios.post(
      "https://arzcqb3s2d.execute-api.eu-west-2.amazonaws.com/prod/send-email",
      params
    );
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    if (!data.name) {
      setError({ type: "name", msg: "*Ange kontaktperson" });
      return;
    } else if (!data.email) {
      setError({ type: "email", msg: "*Ange email" });
      return;
    } else if (!data.message) {
      setError({ type: "desc", msg: "*Ange typ av sittning" });
      return;
    }

    setMessage("Tack för ditt meddelande!");
    createBooking({
      name: data.name,
      email: data.email,
      message: data.message,
    });
    setError({ type: "", msg: "" })
    reset();
  };

  return (
    <div className="w-full md:w-1/3 bg-neutral-300 shadow-2xl rounded-lg border-2 border-dashed border-neutral-600">
      <div className="pt-10 pb-8 flex flex-col items-center">
        <h1 className="text-4xl text-center text-neutral-700 font-heading font-semibold">
          Ta kontakt
        </h1>
      </div>
      <div id="boka" className="p-4 flex justify-center w-full">
   
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="flex flex-col w-full"
          >
            <div className="flex pb-1">
              <p className="text-neutral-700 font-semibold text-lg pl-1 text-center">
                Kontaktperson{" "}
              </p>
            </div>

            <input
              type="text"
              placeholder="Ditt namn"
              name="name"
              {...register("name")}
              className={`${
                error.type === "name" ? "border-2 border-red-400" : ""
              } p-4 bg-neutral-200 placeholder-neutral-500 text-sm text-neutral-800 rounded-md shadow-sm`}
            />
            <div className="flex pb-1 mt-4">
              <p className="text-neutral-700 font-semibold text-lg pl-1 text-center">
                Email{" "}
              </p>
            </div>
            <input
              type="text"
              placeholder="Din email"
              name="email"
              {...register("email")}
              className={`${
                error.type === "email" ? "border-2 border-red-400" : ""
              } p-4 bg-neutral-200 placeholder-neutral-500 text-sm text-neutral-800 rounded-md shadow-sm`}
            />

            <div className="flex pb-1 mt-4">
              <p className="text-neutral-700 font-semibold  text-lg pl-1 text-center">
                Ditt meddelande{" "}
              </p>
            </div>

            <textarea
              type="text"
              placeholder="Skriv ditt meddelande här"
              name="message"
              {...register("message")}
              className={`${
                error.type === "desc" ? "border-2 border-red-400" : ""
              } p-4 bg-neutral-200 placeholder-neutral-500 text-sm text-neutral-800 rounded-md shadow-sm mb-6 h-[100px]`}
            />

            <input
              type="submit"
              className="p-4 bg-rose-500 placeholder-neutral-700 text-neutral-900 rounded-md shadow-sm cursor-pointer hover:bg-rose-600"
              value="Skicka"
            />
            {message ? (
              <div className="flex justify-center text-lg text-neutral-500 mt-5 font-bold">
                <p>{message}</p>
              </div>
            ) : null}
          </form>
      </div>
    </div>
  );
}
