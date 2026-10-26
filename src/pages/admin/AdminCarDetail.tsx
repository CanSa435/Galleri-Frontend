import  Stack  from "@mui/material/Stack";
import  Paper  from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import type ApiResponse from "../../models/ApiResponse";
import type CarModel from "../../models/CarModel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:'#fff',
  ...theme.typography.body2,
  padding:theme.spacing(1),
  textAlign:'center',
  color:(theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark',{
    backgroundColor:'#1A2027'
  }),
}));

const AdminCarDetail = () => {

  const { id } = useParams();
  console.log(id)
  const [car,setCar] = useState<CarModel>();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    axios.get<ApiResponse<CarModel>>(`http://localhost:8080/rest/api/cars/get-car/${id}`,{
      headers:{ Authorization:`Bearer ${token}`}
    }).then((data:any) => {
      setCar(data.data.payload)
    }).catch((err:any) => {
      console.log(err);
    })
  },[])
  return (
    <div className="container mx-auto mt-28">
      <Stack spacing={2}>
        <Item>
          {car?.production}
        </Item>
        <Item>
          {car?.model}
        </Item>
        <Item>
          {car?.productionYear}
        </Item>
        <Item>
          {car?.plaka}
        </Item>
        <Item>
          {car?.price}
        </Item>
         <Item>
          {car?.productionYear}
        </Item>
        <Item>
          {car?.damagePrice}
        </Item>
      </Stack>
    </div>

  )
}

export default AdminCarDetail