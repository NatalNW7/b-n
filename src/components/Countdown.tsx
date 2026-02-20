"use client";

import { useState, useEffect, useCallback } from "react";

const WEDDING_DATE = new Date("2026-03-15T16:00:00-03:00"); // BRT

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  const calculateTimeLeft = useCallback(() => {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, []);

  useEffect(() => {
    // Initial calculation after mount to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // If wedding has passed or haven't calculated yet (SSR/Hydration)
  if (!timeLeft && typeof window !== "undefined") {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) {
      return <p className="countdown__past">Hoje é o grande dia! 💛</p>;
    }
  }

  // Initial render (SSR/Hydration) - empty to avoid mismatch
  if (!timeLeft) return <div className="countdown" style={{ opacity: 0 }}>...</div>;

  const items = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <div className="countdown">
      {items.map(({ value, label }) => (
        <div key={label} className="countdown__block">
          <span className="countdown__digit">
            {String(value).padStart(2, "0")}
          </span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  );
}
