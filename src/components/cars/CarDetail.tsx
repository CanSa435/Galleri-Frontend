import { useParams } from "react-router-dom"
import Navbar from "../Navbar";
import Footer from "../Footer";
import type CarModel from "../../models/CarModel";
import { useEffect, useState } from "react";
import axios from "axios";
import type ApiResponse from "../../models/ApiResponse";

 
const CarDetail = () => {
  const { id  } = useParams();
  console.log(id);
  const [carDetai,setCarDetail] = useState<CarModel>();
  useEffect(() => {
    axios.get<ApiResponse<CarModel>>(`http://localhost:8080/rest/api/cars/get-car/${id}`)
    .then((data:any) => (
      setCarDetail(data.data.payload)
    )).catch((err:any) => (
      console.log(err)
    ))
  },[])
  return (
    <>
        <Navbar/>
        <section className="pt-24 min-h-screen">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-baseline gap-5">
              <h1>Araba Bilgileri</h1>
              <div className="m-5 mt-4 text-center">
                <p className="font-normal">Marka         :  {carDetai?.production}</p>
                <p className="font-normal">Model         :  {carDetai?.model} </p>
                <p className="font-normal">Üretim Yılı   :  {carDetai?.productionYear}</p>
                <p className="font-normal">Plaka         :  {carDetai?.plaka} </p>
                <p className="font-normal">Fiyat         :  {carDetai?.price} </p>
                <p className="font-normal">Fiyat Türü    :  {carDetai?.currencyType} </p>
                <p className="font-normal">Hasar Fiyatı  :  {carDetai?.damagePrice} </p>
              </div>
            </div>
          </div> 
        </section>
        <Footer/>
    </>

  )
}

export default CarDetail