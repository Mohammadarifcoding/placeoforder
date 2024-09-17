import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function DynamicSelect({
  className,
  options = [],
  ...rest
}) {

  const { required, label, placeholder } = { ...rest };

  return (
    <div className={cn("w-full my-3", className)}>
      {label && (
        <label className="flex items-center gap-1 mx-1 mb-1 font-semibold">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Select required={required} {...rest}>
        <SelectTrigger className={className}>
          <SelectValue placeholder={placeholder || label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
