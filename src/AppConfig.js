import React from "react";

export const baseUrl ='http://localhost:8081';
  
export const headers =  { 
    'Authorization': 'Bearer '+localStorage.getItem('token'),
    'Content-type': 'application/json',
};