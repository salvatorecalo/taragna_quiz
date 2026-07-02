"use client"
import { useRouter } from "next/navigation";

export default function Home() {
   const router = useRouter()
  function startQuiz() {
  
    router.push("/quiz")
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-8">Quiz controlli automatici (taragna)</h1>
          <button className="btn btn-primary" onClick={startQuiz}>Inizia quiz</button>
        </div>
      </div>
    </div>
  );
}
