"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Page = () => {
  const { toast } = useToast();
  return (
    <div className="h-5/6 w-screen flex justify-center items-center text-black">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
};

export default Page;
