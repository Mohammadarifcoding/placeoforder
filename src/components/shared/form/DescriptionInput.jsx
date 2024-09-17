import { Textarea } from '@/components/ui/textarea';

const DescriptionInput = ({ label, ...rest }) => {
    const { required, error } = { ...rest }
    return (
        <>
            <label
                className="flex items-center gap-1 mx-1 mb-1 font-semibold"
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <Textarea
                // name={''}
                // className={''}
                // placeholder={''}
                // autoComplete="off"
                // defaultValue={defaultValue}
                {...rest}
            />
            <span className="text-xs text-red-500">{error}</span>
        </>
    );
};

export default DescriptionInput;