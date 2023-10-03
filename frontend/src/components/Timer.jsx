import React, { useEffect, useState } from 'react';
import styles from './Timer.module.css';
import Card from './Card';
const calculateTimeLeft = () => {
  const targetDate = new Date('2023-10-24');
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds
  };
};

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <Card className={styles.timerContainer}>
      <div className={styles.timerItem}>
        <span className={styles.timerValue}>{timeLeft.days}</span>
        <span className={styles.timerLabel}>Days</span>
      </div>
      <div className={styles.timerItem}>
        <span className={styles.timerValue}>{timeLeft.hours}</span>
        <span className={styles.timerLabel}>Hours</span>
      </div>
      <div className={styles.timerItem}>
        <span className={styles.timerValue}>{timeLeft.minutes}</span>
        <span className={styles.timerLabel}>Minutes</span>
      </div>
      <div className={styles.timerItem}>
        <span className={styles.timerValue}>{timeLeft.seconds}</span>
        <span className={styles.timerLabel}>Seconds</span>
      </div>
    </Card>
  );
};

export default Timer;
