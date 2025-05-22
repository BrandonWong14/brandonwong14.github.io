import '../index.css'
import { Button } from "@/components/ui/button"
import GlobalSidebar from "../components/GlobalSidebar.tsx"

function Home() {

  return (
    <div className="bg-[#FAFDFF]">
        <div className="max-h-5">
            <GlobalSidebar>
                <div className="text-xl font-bold">
                </div>
            </GlobalSidebar>
        </div>
        <div className="h-20 invisible"></div>
        <div className="mx-auto w-fit">
            <h1 className="h-1 invisible">Introduction</h1>
            <p className="text-2xl"> Hello there! My name is </p>
            <p className="text-4xl font-bold"> Brandon Wong </p>
            <p className="text-xl"> I study Electrical Engineering and Computer Science at UC Berkeley.</p>
            <div className="h-5 invisible"></div>
            <p className="text-xl"> Welcome to my (very WIP) personal website!</p>
            <div className="h-20 invisible"></div>

            <div className="mx-auto w-fit">
                <Button>Button Here</Button>
            </div>
        </div>
    
        
    </div>
  )
}

export default Home