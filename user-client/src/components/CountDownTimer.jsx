import { useEffect, useState } from 'react';

const CountdownTimer = ({ durationInSeconds = 300, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);

    useEffect(() => {
    if (timeLeft <= 0) {
        if (onComplete) onComplete();
        return;
    }

    const interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
    }, [timeLeft, onComplete]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
    <div className="text-center">
        <div className="text-lg font-bold">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
    </div>
    );
};

export default CountdownTimer;
