// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import { Link } from "react-router-dom";
import Modal, { ICustomModalStyle } from '@bdenzer/react-modal';
import Logo from '../../../SDGLogos/Goal-13.png';

interface States {
    button1color: string,
    button2color: string,
    shouldShowModal: boolean
}

// eslint-disable-next-line react/prefer-stateless-function
export class SDG13_Quiz_Question1 extends React.Component <unknown, States> {
    
    constructor(props : unknown) {
        super(props);
        this.state = {
          button1color: 'rgb(204,204,255)',
          button2color: 'blue',
          shouldShowModal: false
        };
        this.closeModal = this.closeModal.bind(this);
      this.openModal = this.openModal.bind(this);
      }

      handleClick() : void{
        this.setState(({ button1color }) => ({
          button1color: 'green',
          button2color: 'red'
        }));
      }

      private closeModal(): void {
        this.setState({ shouldShowModal: false });
      }
  
      private openModal(): void {
        this.setState({ shouldShowModal: true });
      }

    

    render(): JSX.Element {
        const modalStyle: ICustomModalStyle = {
            animationTime: 400,
            closeButtonText: {
              color: 'white'
            },
            hoveredButtonText: {
              fontWeight: 'bold'
            },
            modalHeader: {
              backgroundColor: 'green'
            },
            modalTitle: {
              color: 'white'
            }
          };
        return (
            <div>
              <div className = "colour_sdg13" >
           <div className = "header">
          Hochwertige Bildung <img className ="sdglogo" alt="logo" src={Logo}/>    
           </div> 
           
       </div>
                
                    <p className ="quizQuestion">Does a passenger car or a plane produce more greenhouse gases?</p>
                <div>
                    
                        <button className = "answerButtonleft" style={{ backgroundColor: this.state.button1color }} type = "button" onClick = { () => {this.handleClick() ; setTimeout(() => {  this.openModal() }, 1000)}}> 
                            The passenger car
                        </button> 
                        <button className = "answerButtonright" style={{ backgroundColor: this.state.button2color }} type = "button" onClick = { () => {this.handleClick() ; setTimeout(() => {  this.openModal() }, 1000)}} >
                            The plane
                        </button>
                        
                </div>
                <div>
          <Modal
            closeModal={this.closeModal}
            customStyle={modalStyle}
            shouldShowModal={this.state.shouldShowModal}
            title="React Modal in TypeScript"
          >
           The plane does. Studies show that a plane produces about 230 grams per Person per kilometer (g/Pkm) while a passenger car only frees about 147 g/Pkm.
          </Modal>
        </div>
            </div>
        );
    }
}
