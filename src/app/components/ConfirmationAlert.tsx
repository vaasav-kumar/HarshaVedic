import { AlertCircle, CheckCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { cn } from "./ui/utils";

type ConfirmationAlertProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  message: string;
  variant?: "success" | "error";
};

export function ConfirmationAlert({
  open,
  onOpenChange,
  title,
  message,
  variant = "success",
}: ConfirmationAlertProps) {
  const isSuccess = variant === "success";

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-md border-0 shadow-2xl overflow-hidden p-0 gap-0">
        <div
          className={cn(
            "px-6 pt-8 pb-6 text-center",
            isSuccess
              ? "bg-gradient-to-br from-green-50 to-white"
              : "bg-gradient-to-br from-red-50 to-white",
          )}
        >
          <div
            className={cn(
              "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-md",
              isSuccess
                ? "bg-gradient-to-r from-green-600 to-green-700"
                : "bg-gradient-to-r from-red-500 to-red-600",
            )}
          >
            {isSuccess ? (
              <CheckCircle className="h-8 w-8 text-white" />
            ) : (
              <AlertCircle className="h-8 w-8 text-white" />
            )}
          </div>
          <AlertDialogHeader className="text-center sm:text-center">
            <AlertDialogTitle className="text-xl text-gray-900">
              {title}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600 text-base leading-relaxed pt-1">
              {message}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter className="px-6 py-4 bg-white border-t border-gray-100 sm:justify-center">
          <AlertDialogAction
            className={cn(
              "w-full sm:w-auto min-w-[120px] py-5 text-base font-semibold shadow-lg",
              isSuccess
                ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
            )}
          >
            OK
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
