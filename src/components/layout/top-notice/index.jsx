"use client";

import Link from "next/link";
import { CiLocationOn, CiPhone, CiHeadphones } from "react-icons/ci";
import { useEffect, useState } from "react";


const TopNotice = () => {
    
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + 73);
            targetDate.setHours(0, 0, 0, 0);

            const difference = targetDate - new Date();
            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };

        setTimeLeft(calculateTimeLeft()); // Set initial value after mount

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) return null; // Prevent rendering mismatched HTML


    return (
        <div className="bg-[#ede9a0] py-1 text-xs md:text-[13px]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left */}
                    <div className="hidden lg:flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <CiPhone />
                            <Link href={"tel:+800-345-678"}>+800-345-678</Link>
                        </div>
                        <div className="flex items-center gap-1">
                            <CiLocationOn />
                            <Link href={"/"}>Store</Link>
                        </div>
                        <div className="flex items-center gap-1">
                            <CiHeadphones />
                            <Link href={"/"}>Virtual Appointment</Link>
                        </div>
                    </div>

                    {/* Middle */}
                    <div className="flex justify-center items-center gap-2">
                        <span>Get up to 35% off + Free shipping</span>
                        <Link href={'/collections'} className="underline">Shop now</Link>
                    </div>

                    {/* Right */}
                    <div className="hidden lg:flex justify-end items-center gap-1">
                        <span>Ends in</span>
                        <p className="flex flex-col items-center pl-2">
                            <span>{timeLeft.days}</span>
                            <span>Days</span>
                        </p>
                        <p>:</p>
                        <p className="flex flex-col items-center">
                            <span>{timeLeft.hours}</span>
                            <span>Hours</span>
                        </p>
                        <p>:</p>
                        <p className="flex flex-col items-center">
                            <span>{timeLeft.minutes}</span>
                            <span>Minutes</span>
                        </p>
                        <p>:</p>
                        <p className="flex flex-col items-center">
                            <span>{timeLeft.seconds}</span>
                            <span>Secs</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNotice;
