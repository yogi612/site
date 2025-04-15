import { cva } from "class-variance-authority"

export const formContainerStyles = "space-y-6 bg-white p-8 rounded-lg shadow-md"

export const formGroupStyles = "space-y-2"

export const formLabelStyles = "text-sm font-medium text-gray-700"

export const formInputStyles = cva(
  "w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200",
  {
    variants: {
      state: {
        default: "bg-white",
        error: "border-red-500 bg-red-50",
        success: "border-green-500 bg-green-50",
        disabled: "bg-gray-100 text-gray-500 cursor-not-allowed",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
)

export const formButtonStyles = cva(
  "px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center justify-center",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
        outline: "bg-transparent border border-primary text-primary hover:bg-primary/10",
        danger: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "text-sm px-4 py-2",
        md: "text-base px-6 py-3",
        lg: "text-lg px-8 py-4",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
)

export const formErrorStyles = "text-sm text-red-500 mt-1"

export const formSuccessStyles = "text-sm text-green-500 mt-1"

export const formHintStyles = "text-xs text-gray-500 mt-1"

export const formDividerStyles = "relative my-6"

export const formDividerLineStyles = "absolute inset-0 flex items-center"

export const formDividerTextStyles = "relative flex justify-center text-xs uppercase"

export const formDividerTextInnerStyles = "bg-white px-2 text-gray-500"
