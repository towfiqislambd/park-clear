import { Dialog, DialogContent } from "@/components/ui/dialog";
import { QuestionSvg } from "../svg-container/SvgContainer";

const CuponModal = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={"dark:bg-gray-900"}>
        <div className="py-10 text-center">
          <div className="size-16 rounded-full bg-red-500 grid place-items-center mx-auto">
            <QuestionSvg />
          </div>
          <h3 className="text-2xl pt-5 pb-4 font-bold text-dashboard-common-heading dark:text-white capitalize">
            Your Coupon code is:
          </h3>
          <p className="text-sidebar-card-desc max-w-[350px] mx-auto mb-6 2xl:mb-10 dark:text-gray-200 capitalize">
            Uk-Parkclear-Prodriver-25Off
          </p>

          <div className="flex justify-center items-center gap-3 2xl:gap-4">
            {/* Cancel btn */}
            <button
              className="px-5 2xl:px-7 py-2 2xl:py-3.5 rounded-[6px] 2xl:rounded-lg bg-red-500 text-white font-medium cursor-pointer capitalize"
              onClick={() => onOpenChange(false)}
            >
              Copy to clipboard
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CuponModal;
