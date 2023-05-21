import React from 'react';
import "../Components/Assets/css/addproperty.css";
import Header from '../Components/Header.js'
import Footer from '../Components/Footer';
import { useState } from 'react';
import axios from 'axios';
export default function Addproperty() {

  const [name, setname] = useState("Home");
  const [selectedOption, setSelectedOption] = useState('');
  const [property, setProperty] = useState({
    email: "",
    purpose: "",
    type: "",
    city: "",
    area: 0,
    unit: "marla",
    price: 0,
    rooms: 0,
    bath: 0,
    floors: 0,
    installment: false,
    description: "",
    latitude: 0,
    longitude: 0,
  });

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value
    });
  };
  const handleChangeRadio = (e) => {
    setSelectedOption(e.target.value);
    setProperty({
      ...property,
      [e.target.name]: e.target.value
    });
  };
  const handleCheckboxChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.checked
    });
  };

  function Button() {
    
  }


  function Home() {
    if (name == "Home") {
      return (
        <>
          <div className="sell  " >
            <label className="label">
              <input type="radio" name="type" value="Home"  checked={selectedOption === 'Home'} onChange={handleChangeRadio} onClick={() => { Button() }} />
              Home
            </label>
            <label className="label">
              <input type="radio" name="type" value="Flat" checked={selectedOption === 'Flat'} onChange={handleChangeRadio} />
              Flat  </label>
            <label className="label">
              <input type="radio" name="type" value="Upper Portion" checked={selectedOption === 'Upper Portion'} onChange={handleChangeRadio} />
              Upper Portion </label>
            <label className="label">
              <input type="radio" name="type" value="Lower Portion" checked={selectedOption === 'Lower Portion'} onChange={handleChangeRadio} />
              lower Portion </label>
            <label className="label">
              <input type="radio" name="type" value="Penthouse" checked={selectedOption === 'Penthouse'} onChange={handleChangeRadio} />
              Penthouse  </label>
          </div>
          <div className='type'>
            <h2>Rooms and Bathrooms </h2>
            <div>
              <input type="number" id="city-input" list="none" placeholder={"Room(s)"} />
            </div>
            <div className='mt-4 '>
              <input type="number" id="city-input" list="none" placeholder={"Bathroom(s)"} />
            </div>
          </div>
        </>
      )
    }
    else if (name == "Commercial") {
      return (
        <>
          <div className="sell " >
            <div className="sell  " >
              <label className="label">
                <input type="radio" name="type" value="Office" checked={selectedOption === 'Office'} onChange={handleChangeRadio} />
                Office
              </label>
              <label className="label">
                <input type="radio" name="type" value="Shop" checked={selectedOption === 'Shop'} onChange={handleChangeRadio} />
                Shop  </label>
              <label className="label">
                <input type="radio" name="type" value="Warehouse" checked={selectedOption === 'Warehouse'} onChange={handleChangeRadio} />
                Warehouse </label>
              <label className="label">
                <input type="radio" name="type" value="Factory" checked={selectedOption === 'Factory'} onChange={handleChangeRadio} />
                Factory  </label><label className="label">
                <input type="radio" name="type" value="Building" checked={selectedOption === 'Building'} onChange={handleChangeRadio} />
                Building   </label>
            </div>

          </div>
          <div className='type'>
            <h2>Floors</h2>
            <div>
              <input type="number" id="city-input" list="none" placeholder={"Floor(s)"} />
            </div>
          </div>
        </>
      )
    }
    else {
      return (
        <></>
      )
    }
  }

  return (
    <div>

      <Header page={4} />
      <form>
        <div class="main container">
          <h1>Purpose </h1>
          <div class="location container">
            <h2>Select Purpose </h2>

            <div className="sell ">
              <label className="label">
                <input type="radio" name="purpose" value="Sell" onChange={handleChange} />
                Sell
              </label>
              <label className="label">
                <input type="radio" name="purpose" value="Rent" onChange={handleChange} />
                Rent </label>
            </div>
            <div className='type'>
              <h2>Select property type </h2>

              {/* //////////////////select 000000 */}

              <div className='hpc '>

                <button type="button" class="btn" style={{ marginRight: "10px" }} onClick={() => { setname("Home"); Button() }}  >Home</button>
                <button type="button" class="btn" onClick={() => { setname("Commercial") }}>Commercial</button>
              </div>

              <Home />

            </div>

          </div>
        </div>

        <div className='main container'>
          <h1>Price and Area</h1>

          <div className='location'>
            <h2>
              Area Size
            </h2>
            <div className='flex '>
              <input type="number" id="city-input" list="none" placeholder={"Area"} name="area" onChange={handleChange}/>

              <select name="unit" id="cars" onChange={handleChange}>
                <option value="marla">marla</option>
                <option value="Srfeet">Srfeet</option>
                <option value="kanal">kanal</option>
              </select>
            </div>

            
            <div className='flex mt-4 '>
            <h2>
              Price
            </h2>
              <input type="text" id="city-input" list="none" placeholder={"Price"} name="price" onChange={handleChange}/>

              <select name="price" id="cars" >
                <option value="pkr">pkr</option>
              </select>
            </div>
            <div className='d-flex flex-row justify-content-between  mt-4'>
              <div >
                <h2>Installlment available </h2>
                <p>Enable if you want to give it in the installlment</p>
              </div>

              <div class="form-check form-switch mt-4">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name="area" onChange={handleCheckboxChange}/>
              </div>
            </div>
            <div className='d-flex flex-row justify-content-between  mt-4'>
              <div >
                <h2> Ready for possesion </h2>
                <p>Enable if Ready for possesion
                </p>
              </div>

              <div class="form-check form-switch mt-4">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              </div>




            </div>



          </div>

        </div>

        <div class="main container">
          <h1>Infromantion and details  </h1>


          <div class="location container">


            <h3 className='mt-3'>Description </h3>
            <div class="mb-3">
              <textarea class="form-control" id="description" rows="6" name="description" onChange={handleChange}></textarea>
            </div>

          </div>
        </div>

        <div class="main container">
          <h1>Images and Panorama </h1>


          <div class="location container">
            <div className='ImagePanorama'>
              <div >
                <h3 className='mt-3'>Add Images</h3>
                <div className='uploadimage  container m-5  p-4 '>
                  <div className='sizeimage '>
                    <button className='btn primary m-3 '>Add Images</button>
                    <label>Max size 10MB , .JPJ , .PNG  </label>
                  </div>
                </div>
              </div>
              <div >
                <h3 className='mt-3'>Add Panorama </h3>
                <div className='uploadimage  container m-5  p-4 '>
                  <div className='sizeimage '>
                    <button className='btn primary m-3 '>Add Images</button>
                    <label>Max size 10MB , .JPJ , .PNG  </label>
                  </div>
                </div>
              </div>



             
            </div>

          </div>


        </div>
        <div class="main container">
          <h1>Location </h1>


          <div class="location container">
            <div className='city' >
              <h2> City</h2>

              <input type="text" id="city-input" name="city" list="city-options" onChange={handleChange} placeholder={"Enter City Name"} />

              <datalist id="city-options">
                <option value="Islamabad" />
                <option value="Rawal Pindi" />
              </datalist>


            </div>
            <h3 className='mt-3'>Address</h3>

            <input type="text" id="city-input" name="city" list="city-options" placeholder={"Enter the location "} />

            <h4 className='mt-4'>
              <span class="glyphicon glyphicon-map-marker"></span>{" "}
              Location
            </h4>
            <div class="well">
              <iframe
                width="700px"
                height="350"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.895737781036!2d73.03973794999999!3d33.711646699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe52c55156f9%3A0x2ef246a5e0f7f790!2sF-8%20Markaz%20F%208%20Markaz%20F-8%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1671696371010!5m2!1sen!2s"
              ></iframe>
            </div>


          </div>


        </div>
      </form>

      <Footer />
    </div>
  )
}
