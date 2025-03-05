'use client'

import React, { useState } from "react";
import Image from "next/image";
import "./carrinho.css"
import Right from "../../../public/arrowRight.png";
import Mouse from "../../../public/mouse.webp";
import { IoTrashOutline } from "react-icons/io5";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";

export default function Carrinho() {
  const [number, setNumber] = useState(0)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)
  const [number4, setNumber4] = useState(0)


  // produto 
  const somar = () => setNumber(number + 1) 
  const subtrair = () => setNumber(number - 1) 
  
  // produto 1
  const somar1 = () => setNumber1(number1 + 1)
  const subtrair1 = () => setNumber1(number1 -1)

   // produto 2
   const subtrair2 = () => setNumber2(number2 -1)
   const somar2 = () => setNumber2(number2 + 1)

   //produto 3
   const somar3 = () => setNumber3(number3 + 1)
   const subtrair3 = () => setNumber3(number3 -1)

   const somar4 = () => setNumber3(number4 + 1)
   const subtrair4 = () => setNumber3(number4 -1)
   
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

                {/* Botão subtrair  */}
                <button onClick={subtrair} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] 
                rounded-sm hover:scale-125 hover:text-green-600">
                <FiArrowLeftCircle className="w-10" size={30} />
                </button>
                
                {/* visor  */}
                <span className="text-2xl">{number}</span>

                {/* Botão somar  */}
                <button onClick={somar} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] 
                rounded-sm hover:scale-125 hover:text-green-600">
                <FiArrowRightCircle className="w-10" size={30} />
                </button>

              </div>
            </div>
          </div>

          <button className="image-trash flex items-center justify-center ">
            <IoTrashOutline size={50} className="w-7 hover:scale-125 hover:text-red-500" />
          </button>
        </div>

        {/* Item 2 -- Fazer  */}
        <div className="item-product w-[400px] md:w-[400px] flex items-center h-22 gap-2 px-4 mb-4">
          <div className="flex items-center gap-5">
            <div className="imgContent bg-[#1D1D1D] h-22 flex items-center  justify-center rounded-lg hover:cursor-pointer hover:bg-zinc-300 duration-300 hover:scale-110">
              <Image src="/notbook1.svg" width={30} height={0} alt="" className="w-20" />
            </div>

            <div className="productInfo flex flex-col">
              <h2>Logitech MX Master 3s</h2>

              <div className="flex gap-3">
                <span className="font-semibold">R$ 467,93</span>
                <span className="text-[#3d3d3d] line-through">R$ 719,90</span>
              </div>

              <div className="qtd gap-2 flex items-center mt-2.5">
                
                {/* subrair  */}
                <button onClick={subtrair} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D]
                rounded-sm hover:scale-125 hover:text-green-600">
                <FiArrowLeftCircle className="w-10" size={30} />
                </button>

                {/* visor  */}
                <span>{number1}</span>

                {/* somar  */}
                <button onClick={somar} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm 
                hover:scale-125 hover:text-green-600">
                <FiArrowRightCircle className="w-10" size={30} />
                </button>

              </div>
            </div>
          </div>

          <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10 flex items-center justify-center ">
          <IoTrashOutline size={50} className="w-7 hover:scale-125 hover:text-red-500" />
          </button>
        </div>

        {/* Item 3 -- Fazer  */}
        <div className="item-product w-[400px] md:w-[500px] flex items-center h-22 gap-2 px-4 mb-4">
          <div className="flex items-center gap-5">
            <div className="imgContent bg-[#1D1D1D] h-22 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-zinc-300 duration-300 hover:scale-110">
              <Image src="/notbook2.svg" width={30} height={0} alt="" className="w-20" />
            </div>

            <div className="productInfo flex flex-col">
              <h2>Logitech MX Master 3s</h2>

              <div className="flex gap-3">
                <span className="font-semibold">R$ 467,93</span>
                <span className="text-[#3d3d3d] line-through">R$ 719,90</span>
              </div>

              <div className="qtd gap-2 flex items-center mt-2.5">
                
                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm hover:scale-125 hover:text-green-600">
                <FiArrowLeftCircle className="w-10" size={30} />
                </button>

                <span>1</span>

                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm hover:scale-125 hover:text-green-600">
                <FiArrowRightCircle className="w-10" size={30} />
                </button>

              </div>
            </div>
          </div>

          <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10 flex items-center justify-center ">
          <IoTrashOutline size={50} className="w-7 hover:scale-125 hover:text-red-500" />
          </button>
        </div>

        {/* Item 4 -- Fazer  */}
        <div className="item-product w-[400px] md:w-[500px] flex items-center h-22 gap-2 px-4 mb-4">
          <div className="flex items-center gap-5">
            <div className="imgContent bg-[#1D1D1D] h-22 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-zinc-300 duration-300 hover:scale-110">
              <Image src="/placa.svg" width={30} height={0} alt="a" className="w-20" />
            </div>

            <div className="productInfo flex flex-col">
              <h2>Logitech MX Master 3s</h2>

              <div className="flex gap-3">
                <span className="font-semibold">R$ 467,93</span>
                <span className="text-[#3d3d3d] line-through">R$ 719,90</span>
              </div>

              <div className="qtd gap-2 flex items-center mt-2.5">
                
                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm hover:scale-125 hover:text-green-600">
                <FiArrowLeftCircle className="w-10" size={30} />
                </button>

                <span>1</span>

                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm hover:scale-125 hover:text-green-600">
                <FiArrowRightCircle className="w-10" size={30} />
                </button>

              </div>
            </div>
          </div>

          <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10 flex items-center justify-center ">
          <IoTrashOutline size={50} className="w-7 hover:scale-125 hover:text-red-500" />
          </button>
        </div>

        {/* Item 5 -- Fazer  */}
        <div className="item-product w-[400px] md:w-[500px] flex items-center h-22 gap-2 px-4 mb-4">
          <div className="flex items-center gap-5">
            <div className="imgContent bg-[#1D1D1D] h-22 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-zinc-300 duration-300 hover:scale-110">
              <Image src="/ipad.svg" width={30} height={0} alt="" className="w-20" />
            </div>

            <div className="productInfo flex flex-col">
              <h2>Logitech MX Master 3s</h2>

              <div className="flex gap-3">
                <span className="font-semibold">R$ 467,93</span>
                <span className="text-[#3d3d3d] line-through">R$ 719,90</span>
              </div>

              <div className="qtd gap-2 flex items-center mt-2.5">
                
                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm hover:scale-125 hover:text-green-600">
                <FiArrowLeftCircle className="w-10" size={30} />
                </button>

                <span>1</span>

                <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm hover:scale-125 hover:text-green-600">
                <FiArrowRightCircle className="w-10" size={30} />
                </button>

              </div>
            </div>
          </div>

          <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10 flex items-center justify-center">
          <IoTrashOutline size={50} className="w-7 hover:scale-125 hover:text-red-500" />
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