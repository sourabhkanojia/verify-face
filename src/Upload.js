import { useState } from "react";
import React, { Component } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { DatePicker, Button, Col, Row } from 'antd';

function Upload({setList}) {

    let selectedFile
    const history = useHistory()

    const myHandler = (e) => {
        selectedFile = e.target.files[0]
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(selectedFile)
        const url = "http://localhost:8000/upload"
        const formData = new FormData()
        
        formData.append("image", selectedFile);
        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            setList(res.data);
            history.push("/list")
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="center">
            <form onSubmit={submitHandler}>
                <input 
                    value={selectedFile} 
                    type="file" 
                    name="myfile" 
                    onChange={myHandler} 
                    size="90"
                />
                <input type="submit" value="Upload" />
            </form>
        </div>
    )
}

export default Upload;