import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState } from "react";

export function OtpField({ name, className }) {

    const [otp, setOtp] = useState(null);

    const handleOtp = (value) => {
        setOtp(value);
    };

    return (
        <>
            <input type="number" defaultValue={otp} name={name} className="hidden" />
            <InputOTP onChange={handleOtp} containerClassName={className} maxLength={6}>
                {/* <InputOTPGroup> */}
                <InputOTPSlot className="rounded border" index={0} />
                <InputOTPSlot className="rounded border" index={1} />
                <InputOTPSlot className="rounded border" index={2} />
                {/* </InputOTPGroup> */}
                {/* <InputOTPSeparator /> */}
                {/* <InputOTPGroup> */}
                <InputOTPSlot className="rounded border" index={3} />
                <InputOTPSlot className="rounded border" index={4} />
                <InputOTPSlot className="rounded border" index={5} />
                {/* </InputOTPGroup> */}
            </InputOTP>
        </>
    )
}