import { useEffect, useState } from 'react';

// const CountdownTimer = ({ durationInSeconds = 300, onComplete }) => {
//   const [timeLeft, setTimeLeft] = useState(durationInSeconds);

//     useEffect(() => {
//     if (timeLeft <= 0) {
//         if (onComplete) onComplete();
//         return;
//     }

//     const interval = setInterval(() => {
//         setTimeLeft(prev => prev - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//     }, [timeLeft, onComplete]);

//     const minutes = Math.floor(timeLeft / 60);
//     const seconds = timeLeft % 60;

const CountdownTimer = ({ durationInSeconds = 300, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    let endTime = localStorage.getItem('countdown_end_time');

    // Kalau belum ada, set endTime ke waktu sekarang + durasi
    if (!endTime) {
      const newEndTime = Date.now() + durationInSeconds * 1000;
      localStorage.setItem('countdown_end_time', newEndTime);
      endTime = newEndTime;
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = Math.floor((endTime - now) / 1000);

      if (remaining <= 0) {
        clearInterval(interval);
        localStorage.removeItem('countdown_end_time');
        setTimeLeft(0);
        if (onComplete) onComplete();
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [durationInSeconds, onComplete]);

  if (timeLeft === null) return null;

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
