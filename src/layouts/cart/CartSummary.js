import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartService from "../../services/CartService"
import CityService from "../../services/CityService"
import DistrictService from "../../services/DistrictService"
import validationRules from '../myAddresses/validationRules';
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import { Helmet } from 'react-helmet';
import AcilirForm from '../myAddresses/AcilirForm';
import SavedAddressMiniCard from '../myAddresses/SavedAddressMiniCard';

export default function CartSummary() {
    const userId  = localStorage.getItem("userId");

    let cartService = new CartService();
    
    let districtService = new DistrictService();

    const [cartData, setCartData] = useState([])

    useEffect(()=>{
        cartService.getCartsByUserId(userId).then((result)=>setCartData(result.data))
    }, [])

    const getTotalAmount = () => {
        return cartData.reduce(
          (prevValue, currentValue) => prevValue + currentValue.price,
          0
        );
      };

      const formik = useFormik({
        initialValues: {
          customerId: 1,
          firstName: "",
          lastName: "",
          phoneNumber: "",
          cityId: "",
          districtId: "",
          neighbourhood:"",
          openAddress:"",
          addressTitle:""
        },
        validationSchema: validationRules,
        onSubmit: (address) => {
            // userAddressService.add(address).then((result)=>toast.success(result.data.message));
            console.log(address)
        },
      });

      const [cities, setCities] = useState([])
  const [districts, setDistricts] = useState([])
  const selectedCityId = formik.values.cityId
  useEffect(()=>{
    
  }, [])

  const getDistricts = (cityId) => {
    districtService.getDistrictsWithCityId(cityId).then((result)=>setDistricts(result.data))
  }

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));

  const districtOption = districts.map((district, index) => ({
    key: index,
    text: district.name,
    value: district.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  const getCities = () => {
    let cityService = new CityService();
    cityService.getAll().then((result)=>setCities(result.data));
  }

  return (
    <div>
      <Helmet>
        <title>{ `ULUDAĞ ÇORAP - Sepet Özeti` }</title>
      </Helmet>
        <section className="checkout spad">
        <div className="container">
          <div className="checkout__form">
            <form action="#">
              <div className="row">
                {/* form burda açılır kapanır form alanı olacak */}
                <AcilirForm />
                <SavedAddressMiniCard />

                {/* form */}
                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h4 className="order__title">Urunleriniz</h4>
                    <div className="checkout__order__products">Ürünler <span className='toplam-span'>Toplam</span></div>
                    <ul className="checkout__total__products">
                      {
                          cartData.map((cart, key)=>(
                            <li key={key}>{key+1}. {cart.product.name} * {cart.quantity} <span>{cart.product.price}₺</span></li>
                          ))
                      }
                    </ul>
                    <ul className="checkout__total__all">
                      <li>Aratoplam <span>{getTotalAmount()}₺</span></li>
                      <li>Toplam <span>{getTotalAmount()}₺</span></li>
                    </ul>
                    {/* <button type="submit" className="site-btn">ÖDEME SAYFASINA GİT</button> */}
                    <Link to="/payment">
                        <button className="site-btn">ÖDEME SAYFASINA GİT</button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
