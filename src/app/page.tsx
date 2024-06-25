import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="dark bg-background text-foreground relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Footer/>
      </div>
    </main>
  );
}
