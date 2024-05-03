import { Slider } from "@/components/ui/slider";

const page = () => {
  return (
    <div className="h-5/6 w-screen flex justify-center items-center text-white">
      <Slider defaultValue={[33]} max={100} step={1} className="w-40" />
    </div>
  );
};

export default page;
