// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React,  { useState } from 'react'
import { Fab, TextareaAutosize } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'

export const Endscreen = (): JSX.Element => {

    const [qrscan, setQrscan] = useState('No result');
    const handleScan = (data) => {
        if (data) {
            setQrscan(data)
        }
    }
    
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const handleError = err => {
    console.error(err)
    }

    return (
      <div>
            <Link to="/">
            <Fab style={{ marginRight:10 }} color="primary">
                <ArrowBack/>
            </Fab>
            </Link>
            <span>QR Scanner</span>
            
            
            <div style={{ marginTop:30 }}>
                <QrScan
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
            </div>
            

            <TextareaAutosize
                style={{ fontSize:18, width:320, height:100, marginTop:100 }}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}
            />

      </div>
    );
  }
  
