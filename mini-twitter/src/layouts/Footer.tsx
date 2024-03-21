//Icon
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between gap-2 text-xs text-gray-500">
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
      </div>
      <div className="flex justify-between gap-2 text-xs text-gray-500">
        <span>Imprint</span>
        <span>Ads Info</span>
        <div className="flex justify-between items-center gap-1">
          <span>More</span>
          <Icon icon="icon-park-outline:more" className="text-[15px]" />
        </div>
        <div className="flex justify-between items-center gap-1">
          <Icon icon="ph:copyright-light" className="text-[15px]" />
          <span> 2021 Twitter, Inc</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
