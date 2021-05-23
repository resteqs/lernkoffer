// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unused-state */
import * as React from 'react';
import Modal, { ICustomModalStyle } from '@bdenzer/react-modal'; /* https://github.com/ben-denzer/react-modal#example---adding-custom-styles-in-typescript */
import Spielfeld from './spielfeld.png';
import Cards from './cards.png';
import './sdg4.css';

const colors = ["red","blue","green","yellow"];
let randColor = colors[Math.floor(Math.random() * colors.length)];

interface IAppState {
    shouldShowModal: boolean;
}


// eslint-disable-next-line react/prefer-stateless-function
export class spiel04 extends React.Component<unknown, IAppState>{
    
    constructor(props: unknown) {
        super(props);
        this.state = {
          shouldShowModal: false,
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);

      }

      private closeModal(): void {
        this.setState({ shouldShowModal: false });
      }
  
      public openModal(): void {
        this.setState({ shouldShowModal: true });
        randColor = colors[Math.floor(Math.random() * colors.length)];
      }
      

     
      public render(): JSX.Element{
    
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

        return(
           <div><div className = "standard-background" >
           <div className = "header">
          SDG 4:    
           </div> 
           
       </div>
     
        <div>
          <Modal
            closeModal={this.closeModal}
            customStyle={modalStyle}
            shouldShowModal={this.state.shouldShowModal}
            title="Your word is:"
          >
           Test: { randColor }
          </Modal>
          <button type="button" onClick={this.openModal}> <img className = "cards" alt ="test" src={Cards}/></button>
        </div>
        </div>
           
           
        );
    }
   
 
}
export default spiel04

