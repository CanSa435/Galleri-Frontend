import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type GalleristCarModel from '../../models/GalleristCarModel';
import type { JSX } from '@emotion/react/jsx-runtime';
import type ApiResponse from '../../models/ApiResponse';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GalleristCarList from './componentmodels/GalleristCarList';

const GalleristCarListAdmin = () : JSX.Element => {
  const [galleristCarList,setGalleristCarList] = useState<GalleristCarModel[]>([]);
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    axios.get<ApiResponse<GalleristCarModel>>('http://localhost:8080/rest/api/gallerist-car/get-all-gallerist-car',{
      headers:{Authorization: `Bearer ${token}` }
    }).then((data : any) => (
      setGalleristCarList(data.data.payload)
    )).catch((err:any) => (
      console.log(err)
    ))
  },[])
  return (
    <div className="container mx-auto">
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Gallerist Bilgileri</TableCell>
            <TableCell align="right">Gallerist Araba Marka Bilgisi</TableCell>
            <TableCell align="right">Gallerist Araba Model Bilgileri</TableCell>
            <TableCell align="right">Gallerist Araba Plaka Bilgisi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            galleristCarList.map((galleristCar:GalleristCarModel) => (
              <GalleristCarList key={galleristCar.id} id={galleristCar.id} dtoCar={galleristCar.dtoCar} dtoGallerist={galleristCar.dtoGallerist}/>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
 
export default GalleristCarListAdmin