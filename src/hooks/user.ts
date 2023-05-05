
import { User } from "@/types/user";

//userデータを生成する
export const createUser = ()=>{
    const userId = sessionStorage.getItem('userId')?? Math.random().toString(32).substring(2);
    const userScore = Number(sessionStorage.getItem('userScore')||10)
    const newUser : User={
        userId,
        defaultScore:userScore
    }
    sessionStorage.setItem("userId",newUser.userId)
    sessionStorage.setItem("userScore",String(newUser.defaultScore))
    console.log(newUser)
    return newUser;
}
//userデータ削除
export const deleteUser =()=>{
    sessionStorage.removeItem('userId')
}

//userデータ確認用
export const confirmation =()=>{
    alert(sessionStorage.getItem('userId'))
}