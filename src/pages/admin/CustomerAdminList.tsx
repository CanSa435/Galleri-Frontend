import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import type CustomerModel from '../../models/CustomerModel';
import axios from 'axios';
import type ApiResponse from '../../models/ApiResponse';
import AdminCustomerList from './componentmodels/AdminCustomerList';

const CustomerAdminList = () => {
  const [customerList,setCustomerList] = useState<CustomerModel[]>([]);
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    axios.get<ApiResponse<CustomerModel[]>>('http://localhost:8080/rest/api/customers/get-all-customers',{
        headers: { Authorization : `Bearer ${token}`}
    }).then((data:any) => (
        setCustomerList(data.data.payload)
    )).catch((err:any) => (
        console.log(err)
    ))
  })
  return (
    <div className="container mx-auto mt-28">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Müşteri No</TableCell>
            <TableCell align='center'>Müşteri TCKN</TableCell>
            <TableCell align="center">Müşteri Adı</TableCell>
            <TableCell align="center">Müşteri Soyadı</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { 
            customerList.map((customer:CustomerModel) => (
                <AdminCustomerList key={customer.id} id={customer.id} tckn={customer.tckn} firstName={customer.firstName} lastName={customer.lastName}/>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default CustomerAdminList