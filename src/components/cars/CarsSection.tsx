import type CarModel from "../../models/CarModel"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import axios from "axios";
import CarTable from "./CarTable";
import type ApiResponse from "../../models/ApiResponse";

const CarsSection = () => {

    const [carList,setCarList] = useState<CarModel[]>([]);
    useEffect(() => { 
       axios.get<ApiResponse<CarModel[]>>("http://localhost:8080/rest/api/cars/get-all-cars").then((data:any) => (
        console.log(data),
        setCarList(data.data.payload)
       ));
    },[])
  return (
    <section className="pt-24">
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl text-center">Arabalar</h1>
            <div className="m-5 mt-14">
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">No</TableCell>
            <TableCell align="center">Plaka</TableCell>
            <TableCell align="center">Marka</TableCell>
            <TableCell align="center">Model</TableCell>
            <TableCell align="center">Model Yılı</TableCell>
            <TableCell align="center">Fiyat</TableCell>
            <TableCell align="center">Fiyat Tipi</TableCell>
            <TableCell align='center'>Hasar Fiyatı</TableCell>
            <TableCell align="center">Detay</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                carList?.map((car : CarModel) => (
                  <CarTable key={car.id} id={car.id} plaka={car.plaka} model={car.model} production={car.production} productionYear={car.productionYear} price={car.price} currencyType={car.currencyType} damagePrice={car.damagePrice}/>
                )) 
            }
        </TableBody>
      </Table>
    </TableContainer>
                
            </div>
        </div>
    </section>
  )
}

export default CarsSection