
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
  const [choice, setChoice] = useState([]);
  // const count = useTimer();

  useEffect(()=>{
    fetchQuestion();
    console.log('レンダリングされた');
  },[id])
  async function fetchQuestion() {
    const {data:questions} = await supabase.from('random_questions').select('*').limit(1);
    if(questions === null){
      console.log('問題が取得できませんでした')
      setQuestion(null);
    }else{
      setQuestion(questions[0].question)
      console.log(questions[0].id)
      const {data:choices} = await supabase.from('choice').select('*').eq('question_id',questions[0].id);
      const {data:choiceText} = await supabase.from('choice').select('choice_text').eq('question_id',questions[0].id);
      const choiceTexts = choiceText.map((choice) => choice.choice_text);
      setChoice(choiceTexts)
      console.log(choiceTexts)
    }
  }



  return(
    <>
    <p>{question}</p>
    <ul>
      {choice.map((text)=>(
        <li>{text}</li>
      ))}
    </ul>



      {/* <p>{count}</p> */}

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

