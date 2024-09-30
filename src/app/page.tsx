import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import yo from "@/app/images/yo.jpg";
import { Link } from "@mui/material";
//import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-40 mt-20 flex flex-col space-y-20">
        <div className="flex flex-row ">
          <Image
            src={yo}
            width={150}
            className="rounded-full"
            height={150}
            alt=""
          />
          <div>
            <p className="">
              Hola, soy Emmanuel, desarrollador Full Stack, analista programador
              y técnico en electrónica a nivel medio
            </p>
            <div className="flex flex-row space-x-10 pt-10">
              <Link
                href="https://www.linkedin.com/in/emmnauel-orelllana-b6359b177/"
                color="#00000"
                className="bg-slate-500 rounded-md"
                underline="hover"
              >
                Linkedin
              </Link>
              <Link
                href="#"
                color="#00000"
                className="bg-slate-500 rounded-md"
                underline="hover"
              >
                Github
              </Link>
              <Link
                href="#"
                color="#00000"
                className="bg-slate-500 rounded-md"
                underline="hover"
              >
                Correo
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1>Experiencia Laboral</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            corrupti dolorum quia atque, magni aperiam consequatur? Placeat
            sapiente similique ducimus magni dolor, impedit beatae error,
            aliquid voluptates omnis sequi consequuntur!
          </p>
        </div>
        <div>
          <h1>Proyectos</h1>
        </div>
      </main>
    </>
  );
}
