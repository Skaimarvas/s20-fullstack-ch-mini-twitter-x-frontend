//Icon
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 w-full px-5 py-2">
      <h2 className="text-[20px] font-bold">Home</h2>
      <Icon icon="solar:star-fall-linear" className="text-[30px] " />
    </div>
  );
}
