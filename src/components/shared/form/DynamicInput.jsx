// import { Input } from "@/components/ui/input";
import { Input } from "@material-tailwind/react";
import PropTypes from "prop-types";

const DynamicInput = ({ ...props }) => {
  const { placeholder, label, required, error, note } = { ...props };
  return (
    <div className="my-3">
      <label className="flex items-center gap-1 mx-1 mb-1 font-semibold">
        {label} {required && label && <span className="text-red-500">*</span>}
      </label>
      <Input label={placeholder} {...props} />

      {error ?
        <span className="text-xs text-red-500">{error}</span>
        :
        <span className="text-xs text-muted-foreground">{note}</span>}

    </div>
  );
};

DynamicInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  note: PropTypes.string,
};

export default DynamicInput;


// const [showPassword, setShowPassword] = useState(false)

{/* <div className="relative">
                        <Input name="confirmPassword"
                            type={showConfirm ? "text" : "password"}
                            label="Confirm Password"
                            className="w-full pr-10"
                        />
                        <button
                            type="button"
                            className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2"
                            onClick={() => setShowConfirm(!showConfirm)}
                        >
                            {showConfirm ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                        </button>
                    </div> */}