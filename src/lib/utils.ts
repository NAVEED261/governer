import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Calendar } from "@/components/ui/calendar"


export function cn(...inputs: ClassValue[]) {
  return (clsx(inputs))
}
