'use client'

import React, { useState } from "react";
import Image from "next/image";
import "./carrinho.css"
import Right from "../../../public/arrowRight.png";
import Mouse from "../../../public/mouse.webp";

export default function Carrinho() {
  const [number, setNumber] = useState(0)

  function somar(event: any){
    event.preventDefault()
    setNumber(number + 1)
  }

  function subtrair(event: any){
    event.preventDefault()
   
    setNumber(number - 1)
  }

  return (
    <div className="items-product-list">
      
      <div className=" h-[60%] flex flex-row-reverse">
        {/* left  */}
        <div className="bg-zinc-600"></div>

        {/* Right Produtos  */}
        <div className="">
         {/* Item 1 -- Pronto  */}
         <div className="item-product w-[400px] md:w-[400px] flex items-center h-auto gap-2 px-4 mb-4">
          
          <div className="flex items-center gap-5">
            
            <div className="imgContent bg-[#1D1D1D] h-22 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-zinc-300 duration-300 hover:scale-110">
              <Image src={Mouse} alt="a" className="w-20" />
            </div>

            <div className="productInfo flex flex-col">
              <h2>Logitech MX Master 3s</h2>

              <div className="flex gap-3">
                <span className="font-semibold">R$ 467,93</span>
                <span className="text-[#3d3d3d] line-through">R$ 719,90</span>
              </div>

              <div className="qtd gap-2 flex items-center mt-2.5">
                <button onClick={subtrair} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                  <Image src="/arrowLeft.png" width={30} height={30} alt="menos" className="w-2" />
                </button>

                <span>{number}</span>

                <button onClick={somar} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                  <Image src={Right} alt="mais" className="w-2" />
                </button>
              </div>
            </div>
          </div>

          <button className="image-trash">
            <Image src="/trash.png" width={30} height={30} alt="Lixeira" className="w-4" />
          </button>
        </div>

        {/* Item 2 -- Fazer  */}
        <div className="item-product w-[400px] md:w-[500px] flex items-center h-22 gap-2 px-4 mb-4">
          <div className="flex items-center gap-5">
            <div className="imgContent bg-[#1D1D1D] h-22 flex items-center justify-center rounded-lg">
              <Image src={Mouse} alt="a" className="w-20" />
            </div>

            <div className="productInfo flex flex-col">
              <h2>Logitech MX Master 3s</h2>

              <div className="flex gap-3">
                <span className="font-semibold">R$ 467,93</span>
                <span className="text-[#3d3d3d] line-through">R$ 719,90</span>
              </div>

              <div className="qtd gap-2 flex items-center mt-2.5">
                
                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                  <Image src="/arrowLeft.png" alt="menos" width={40} height={30} className="w-2" />
                </button>

                <span>1</span>

                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                  <Image src={Right} alt="mais" className="w-2" />
                </button>

              </div>
            </div>
          </div>

          <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10">
            <Image src="/trash.png" alt="Lixeira" width={30} height={30} className="w-4" />
          </button>
        </div>

        {/* Item 3 -- Fazer  */}
        <div className="item-product w-[400px] md:w-[500px] flex items-center h-22 gap-2 px-4 mb-4">
          <div className="flex items-center gap-5">
            <div className="imgContent bg-[#1D1D1D] h-22 flex items-center justify-center rounded-lg">
              <Image src={Mouse} alt="a" className="w-20" />
            </div>

            <div className="productInfo flex flex-col">
              <h2>Logitech MX Master 3s</h2>

              <div className="flex gap-3">
                <span className="font-semibold">R$ 467,93</span>
                <span className="text-[#3d3d3d] line-through">R$ 719,90</span>
              </div>

              <div className="qtd gap-2 flex items-center mt-2.5">
                
                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                  <Image src="/arrowLeft.png" alt="menos" width={40} height={30} className="w-2" />
                </button>

                <span>1</span>

                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                  <Image src={Right} alt="mais" className="w-2" />
                </button>

              </div>
            </div>
          </div>

          <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10">
            <Image src="/trash.png" alt="Lixeira" width={30} height={30} className="w-4" />
          </button>
        </div>

        {/* Item 4 -- Fazer  */}
        <div className="item-product w-[400px] md:w-[500px] flex items-center h-22 gap-2 px-4 mb-4">
          <div className="flex items-center gap-5">
            <div className="imgContent bg-[#1D1D1D] h-22 flex items-center justify-center rounded-lg">
              <Image src={Mouse} alt="a" className="w-20" />
            </div>

            <div className="productInfo flex flex-col">
              <h2>Logitech MX Master 3s</h2>

              <div className="flex gap-3">
                <span className="font-semibold">R$ 467,93</span>
                <span className="text-[#3d3d3d] line-through">R$ 719,90</span>
              </div>

              <div className="qtd gap-2 flex items-center mt-2.5">
                
                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                  <Image src="/arrowLeft.png" alt="menos" width={40} height={30} className="w-2" />
                </button>

                <span>1</span>

                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                  <Image src={Right} alt="mais" className="w-2" />
                </button>

              </div>
            </div>
          </div>

          <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10">
            <Image src="/trash.png" alt="Lixeira" width={30} height={30} className="w-4" />
          </button>
        </div>

        {/* Item 5 -- Fazer  */}
        <div className="item-product w-[400px] md:w-[500px] flex items-center h-22 gap-2 px-4 mb-4">
          <div className="flex items-center gap-5">
            <div className="imgContent bg-[#1D1D1D] h-22 flex items-center justify-center rounded-lg">
              <Image src={Mouse} alt="a" className="w-20" />
            </div>

            <div className="productInfo flex flex-col">
              <h2>Logitech MX Master 3s</h2>

              <div className="flex gap-3">
                <span className="font-semibold">R$ 467,93</span>
                <span className="text-[#3d3d3d] line-through">R$ 719,90</span>
              </div>

              <div className="qtd gap-2 flex items-center mt-2.5">
                
                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                  <Image src="/arrowLeft.png" alt="menos" width={40} height={30} className="w-2" />
                </button>

                <span>1</span>

                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                  <Image src={Right} alt="mais" className="w-2" />
                </button>

              </div>
            </div>
          </div>

          <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10">
            <Image src="/trash.png" alt="Lixeira" width={30} height={30} className="w-4" />
          </button>
        </div>

     </div>

      </div>

      <div className="w-screen h-[1px] bg-white mt-2 mb-2"></div>

      {/* Calculo  */}
      <div className="results">
        <div className="sub w-screen px-5 flex justify-between">
          <span>Subtotal:</span>
          <span>R$ 1.601,57</span>
        </div>

        <div className="w-screen h-[1px] bg-[#1E1E1E] mt-3 mb-5"></div>

        <div className="sub w-screen px-5 flex justify-between">
          <span>Valor do Frete</span>
          <span>Gratuito</span>
        </div>

        <div className="w-screen h-[1px] bg-[#1E1E1E] mt-3 mb-5"></div>

        <div className="sub w-screen px-5 flex justify-between">
          <span>Valor Desconto:</span>
          <span>- R$ 374,64</span>
        </div>

        <div className="w-screen h-[1px] bg-[#1E1E1E] mt-3 mb-5"></div>

        <div className="sub w-screen px-5 flex justify-between">
          <span className="font-bold">Total:</span>
          <span className="font-bold">R$ 1.226,93</span>
        </div>
      </div>

    </div>
  );
}