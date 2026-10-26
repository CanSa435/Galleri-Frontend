import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import type ApiResponse from '../../models/ApiResponse';
import type GalleristModel from '../../models/GalleristModel'; 
import GalleristList from './componentmodels/GalleristList';

const GalleristListAdmin = () => {
      const [galleristList,setGalleristList] = useState<GalleristModel[]>([]);
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        axios.get<ApiResponse<GalleristModel[]>>('http://localhost:8080/rest/api/gallerist/get-all-galerist',{
          headers: {Authorization : `Bearer ${token}`}
        }).then((data:any) => (
          setGalleristList(data.data.payload)
        )).catch((err:any) => (
          console.log(err)
        ))
    },[])
  return (
     <div className="container mx-auto mt-28">
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Gallerist No</TableCell>
            <TableCell align="right">Gallerist Ad</TableCell>
            <TableCell align="right">Gallerist Soyad</TableCell>
            <TableCell align="right">Gallersit Şehir</TableCell>
            <TableCell align="right">Gallerist İlçe</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              galleristList.map((gallerist:GalleristModel) => (
                <GalleristList key={gallerist.id} id={gallerist.id} firstName={gallerist.firstName} lastName={gallerist.lastName} address={gallerist.address}/>
              ))
            }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default GalleristListAdmin