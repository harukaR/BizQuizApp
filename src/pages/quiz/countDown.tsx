
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

type Props = {}

export default function countDown({}: Props) {
  const [count,setCount] = useState(3);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(interval);
      router.push('seo/q1')
    }
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div>
        <main>
            <p>{count}</p>
            {/* <button onClick={countDownTimer}>start</button> */}
        </main>
    </div>
  )
}