import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { QuestionSvg } from "../svg-container/SvgContainer";

const DeleteAccountModal = ({ open, onOpenChange }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <div className="py-10 text-center">
                    <div className="size-16 rounded-full bg-red-500 grid place-items-center mx-auto">
                        <QuestionSvg />
                    </div>
                    <h3 className="text-2xl pt-5 pb-4 font-bold text-dashboard-common-heading">Delete Account</h3>
                    <p className="text-sidebar-card-desc max-w-[350px] mx-auto mb-10">Are you sure you want to delete your account</p>

                    <div className="flex justify-center items-center gap-4">
                        {/* Delete btn */}
                        <button
                            className="px-7 py-3.5 rounded-lg text-red-500 border border-red-500 font-medium cursor-pointer"
                            onClick={() => onOpenChange(false)}
                        >
                            Delete Account
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

export default DeleteAccountModal;
