import { Button } from "@/components/ui/button";


import Link from "next/link";

export default function Home() {
  return (

    <div>
      <p>Hola soy Felipe</p>
      <Button
      >Pincha aquí
   
    </Button>
    <div className=""> 
      
        <Link href="/about">about</Link></div>
    </div>

  );
}
