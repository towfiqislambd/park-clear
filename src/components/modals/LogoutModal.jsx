import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { QuestionSvg } from "../svg-container/SvgContainer";

const LogoutModal = ({ open, onOpenChange }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className={"dark:bg-gray-900"}>
                <div className="py-10 text-center">
                    <div className="size-16 rounded-full bg-red-500 grid place-items-center mx-auto">
                        <QuestionSvg />
                    </div>
                    <h3 className="text-2xl pt-5 pb-4 font-bold text-dashboard-common-heading dark:text-white">Sign Out</h3>
                    <p className="text-sidebar-card-desc max-w-[350px] mx-auto mb-10 dark:text-gray-200">Are you sure you want to log out</p>

                    <div className="flex justify-center items-center gap-4">
                        {/* Signout btn */}
                        <button
                            className="px-7 py-3.5 rounded-lg text-red-500 border border-red-500 font-medium cursor-pointer"
                            onClick={() => onOpenChange(false)}
                        >
                            Sing Out
                        </button>
                        {/* Cancel btn */}
                        <button
                            className="px-7 py-3.5 rounded-lg bg-red-500 text-white font-medium cursor-pointer"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </button>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LogoutModal;
