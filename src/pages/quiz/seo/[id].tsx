
import { useEffect, useState, } from "react";
import supabase from "../../../../utils/supabase";
import { useRouter } from "next/router";
import { useTimer } from "@/hooks/useTimer";

type Props ={
  id:string;
  params:string;
}

// stateにも型定義
//型定義直す
export default function QuizID({id}:Props) {
  const [question, setQuestion] = useState(null);
  const count = useTimer();

  useEffect(()=>{
    fetchQuestion()
    console.log('レンダリングされた');
  },[id])
  async function fetchQuestion() {
    const {data:question} = await supabase.from('random_questions').select('*').limit(1);
    if(question === null){
      console.log('問題が取得できませんでした')
      setQuestion(null);
    }else{
      setQuestion(question[0]);
    }

    // console.log(question)
  }
  return(
    <>
      {/* <h1>{questionNumber}</h1> */}
      {question ? (
        <p>{question.question}</p>
      ) : (
        <p></p>
      )}
      <p>{count}</p>
    </>
  )
}
export async function getStaticProps({params}:Props) {
  const id = params.id;
  return { props: { id } };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'q1' } },
      { params: { id: 'q2' } },
      { params: { id: 'q3' } },
      { params: { id: 'q4' } },
      { params: { id: 'q5' } },
      { params: { id: 'q6' } },
      { params: { id: 'q7' } },
      { params: { id: 'q8' } },
      { params: { id: 'q9' } },
      { params: { id: 'q10' } }
    ],
    fallback:false  // 上記以外のパスでアクセスした場合は 404 ページにする
  }
}

