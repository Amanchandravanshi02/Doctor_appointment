import React ,{useContext,useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'
import { assets } from '../assets/assets'
const Appointment = () => {
  const{docId}=useParams()
  const{doctors}=useContext(AppContext)
  const[docInfo,setDocInfo]=useState(null)
  const fetchDoc=async()=>{
    const doc = doctors.find(doc => doc._id === docId);
    setDocInfo(doc);    
  }
useEffect(()=>{
  fetchDoc();
},[doctors,docId])
  return  docInfo && (
    <div>
      <div className='flex sm:flex-row gap-4'>
        <div>
          <img className='bg-primary rounded-lg' src={docInfo.image} alt="doc_image"/>
        </div>
        <div>
          <p>{docInfo.name} <img src={assets.verified_icon}/></p>
          <div>
            <p>{docInfo.degree}-{docInfo.speciality}</p>
            <button>{docInfo.experience}</button>
          </div>
          <div>
            <p>About <img src={assets.info_icon}/></p>
            <p>{docInfo.about}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment