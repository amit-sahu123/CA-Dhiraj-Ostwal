"use client"
import React, { useEffect } from 'react'

export default function Bootstrapjs() {
 
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js')
     })
     return (
        null
  )
}

// useEffect(() => {
  //   if(typeof window !== "undefined"){
  //     require('bootstrap/dist/js/bootstrap.min.js')
  //   }
  // })

  // useEffect(() => {
  //        require('bootstrap/dist/js/bootstrap.min.js')
  //     })
