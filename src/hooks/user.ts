
import { User } from "@/types/user";

//userデータを生成する
export const createUser = ()=>{
    const userId = localStorage.getItem('userId')?? Math.random().toString(32).substring(2);
    const userScore = Number(localStorage.getItem('userScore')||10)
    const newUser : User={
        userId,
        defaultScore:userScore
    }
    localStorage.setItem("userId",newUser.userId)
    localStorage.setItem("userScore",String(newUser.defaultScore))
    console.log(newUser)
    return newUser;
}
//userデータ削除
export const deleteUser =()=>{
    localStorage.removeItem('userId')
}

//userデータ確認用
export const confirmation =()=>{
    alert(localStorage.getItem('userId'))
}