import { Dialog, DialogContent } from "@/components/ui/dialog";
import { QuestionSvg } from "../svg-container/SvgContainer";

const FixedPenaltNoticeModal = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={"dark:bg-gray-900"}>
        <div className="py-10 text-center ">
          <div className="size-16 rounded-full bg-red-500 grid place-items-center mx-auto">
            <QuestionSvg />
          </div>
          <h3 className="text-2xl pt-5 pb-4 font-bold text-dashboard-common-heading dark:text-white">
            Sorry
          </h3>
          <p className="text-sidebar-card-desc dark:text-gray-300 max-w-[350px] mx-auto mb-10">
            Currently we are not accepting FIXED PENALT NOTICE
          </p>
          <button
            className="w-[180px] h-[52px] rounded-lg bg-red-500 text-white font-medium text-lg cursor-pointer"
            onClick={() => onOpenChange(false)}
          >
            Ok
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FixedPenaltNoticeModal;
