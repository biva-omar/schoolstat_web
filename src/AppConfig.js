//import React from "react";

export const baseUrl ='http://localhost:8081';
  
//export const baseUrl ='http://167.99.60.227:8081';
  
export const headers =  { 
    'Authorization': 'Bearer '+localStorage.getItem('token'),
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Exam-Session': localStorage.getItem('exam_session'),
};
