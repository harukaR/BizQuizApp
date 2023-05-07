import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export const useTimer =()=>{
    const [count,setCount] = useState(20);
    const router = useRouter();
    useEffect(()=>{
        const countDown = setInterval(()=>{
            setCount((prev) => prev - 1);
        },1000)
        if (count === 0 && router.asPath ==='/quiz/seo/q1') {
            clearInterval(countDown);
            setCount(20);
            router.push('/quiz/seo/q2')
        }
        if (count === 0 && router.asPath ==='/quiz/seo/q2') {
            clearInterval(countDown);
            setCount(20);
            router.push('/quiz/seo/q3')
        }
        if (count === 0 && router.asPath ==='/quiz/seo/q3') {
            clearInterval(countDown);
            setCount(20);
            router.push('/quiz/seo/q4')
        }
        if (count === 0 && router.asPath ==='/quiz/seo/q4') {
            clearInterval(countDown);
            setCount(20);
            router.push('/quiz/seo/q5')
        }
        if (count === 0 && router.asPath ==='/quiz/seo/q5') {
            clearInterval(countDown);
            setCount(20);
            router.push('/quiz/seo/q6')
        }
        if (count === 0 && router.asPath ==='/quiz/seo/q6') {
            clearInterval(countDown);
            setCount(20);
            router.push('/quiz/seo/q7')
        }
        if (count === 0 && router.asPath ==='/quiz/seo/q7') {
            clearInterval(countDown);
            setCount(20);
            router.push('/quiz/seo/q8')
        }
        if (count === 0 && router.asPath ==='/quiz/seo/q8') {
            clearInterval(countDown);
            setCount(20);
            router.push('/quiz/seo/q9')
        }
        if (count === 0 && router.asPath ==='/quiz/seo/q9') {
            clearInterval(countDown);
            setCount(20);
            router.push('/quiz/seo/q10')
        }
        if (count === 0 && router.asPath ==='/quiz/seo/q10') {
            clearInterval(countDown);
            setCount(20);
            router.push('/quiz/result')
        }
        return () => clearInterval(countDown);
    },[count])
    return count
}
