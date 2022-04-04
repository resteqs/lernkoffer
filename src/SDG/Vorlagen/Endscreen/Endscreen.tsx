// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React,  { useState } from 'react'
import { TextareaAutosize } from '@material-ui/core'
import QrScan from 'react-qr-reader'
import validator from 'validator'

export const Endscreen = (): JSX.Element => {

    const [qrscan, setQrscan] = useState('No result');
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const validate = (value) => {
    
        if (validator.isURL(value)) {
            window.open(value,"_self")
        } 
      }
    const handleScan = (data) => {
        if (data) {
            setQrscan(data)
            validate(data)
        }
    }
    
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const handleError = err => {
    console.error(err)
    }

    return (
      <div>
    
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
  
