import React, { useState, useEffect } from 'react'
import "./userInfos.css"
import "./jquery"
import { Person } from '@material-ui/icons'
import { Icon } from 'semantic-ui-react'
import { useUserContext } from "../../contexts/UserContext"
import UserService from '../../services/UserService'
import CustomerUpdate from './CustomerUpdate'

export default function UserInfos() {

  const [customer, setCustomer] = useState(null)

const[state] = useUserContext();
    const userId = state?.authenticatedUser?.id;

    

useEffect(()=>{
  let userService = new UserService();
  userService.getByUserId(userId).then((result)=>setCustomer(result.data.data))
})

  return (
    <div>
      <div className="user__card">
        <div className="bg">
          <div className="perfil"><Person style={{ fontSize: "10rem" }} /></div>
          <div className="aside" style={{backgroundColor:"#F5853F"}}><Icon name="bars" color="white" /></div>

        </div>
        <div className="main__content" style={{backgroundColor:"#0099cc"}}>
          <div className="upper__card" style={{backgroundColor:"#F5853F"}}>
            <div className="info">
              <h3>{customer?.firstName} {customer?.lastName}</h3> <br />
              <p>Kullanıcı Adı: {customer?.userName}</p>
              <p>Email: {customer?.email}</p>
              <p>Telefon Numarası: {customer?.phoneNumber}</p>
              <p>Kayıt Tarihi: 20.10.2020</p>
             
            </div>
          </div>
          <div className="down__card">
            <div className="bio">
             <CustomerUpdate customer={customer}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
