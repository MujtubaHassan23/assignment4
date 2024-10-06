import Image from "next/image";
import Card from "./component/Card";


export default function Home() {
  return (
    <div className="bg-zinc-200 flex flex-col items-centre p-6"> 
    <h1 className="text-5xl front-bold  text-center mb-6 italic underline">STUDENT ID CARD </h1>
    <Card name="mujtuba" rollno={4321} day='Monday'></Card> <hr></hr>
    <Card name="hassan" rollno={4433} day='tuesday'></Card> <hr></hr>
    <Card name="abidi" rollno={5321} day='wednesday'></Card>
    </div>
  );
}
