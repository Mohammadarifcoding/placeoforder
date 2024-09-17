import { Input } from "@/components/ui/input";
import PropTypes from "prop-types";

const DynamicInput = ({ label, ...rest }) => {
  const { required, error } = { ...rest };
  return (
    <div className="my-3">
      <label className="flex items-center gap-1 mx-1 mb-1 font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Input {...rest} />
      <span className="text-xs text-red-500">{error}</span>
    </div>
  );
};

DynamicInput.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default DynamicInput;
