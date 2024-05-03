"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const Page = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="h-5/6 w-screen flex justify-center items-center ">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border bg-white"
      />
    </div>
  );
};

export default Page;
