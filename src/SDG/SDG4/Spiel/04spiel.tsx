// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unused-state */
import * as React from 'react';
import Modal, { ICustomModalStyle } from '@bdenzer/react-modal'; /* https://github.com/ben-denzer/react-modal#example---adding-custom-styles-in-typescript */
import Spielfeld from './spielfeld.png';
import Cards from './cards.png';
import './sdg4.css';
import '../../../styles/colour_sdgs.css';
import Logo from '../../../SDGLogos/Goal-04.png';
import Question from './question_mark.png';

const colors = ["red","blue","green","yellow"];
let randColor = colors[Math.floor(Math.random() * colors.length)];
enum modals {
  NONE = 'NONE',
  modalOne = 'modalOne',
  modalTwo = 'modalTwo'
}
interface IAppState {
    shouldShowModal: modals;
}

// eslint-disable-next-line react/prefer-stateless-function
export class spiel04 extends React.Component<unknown, IAppState>{
    
    constructor(props: unknown) {
        super(props);
        this.state = {
          shouldShowModal: modals.NONE,
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
      }

      private closeModal(): void {
        this.setState({ shouldShowModal: modals.NONE });
      }
  
      public openModal(e: React.MouseEvent<HTMLButtonElement>): void {
        let modalToOpen = e.currentTarget.dataset.modalId as modals;
        if (!modals[modalToOpen]) {
          console.log(`Modal ${modalToOpen} not found`);
          modalToOpen = modals.NONE;
        }
        this.setState({ shouldShowModal: modalToOpen });
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
              color: 'white',
              
              
            }
            
            
          };
          const modalStyleSecond: ICustomModalStyle = {
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
            },
            modalBackgroundOpen: {
             width: 3000
            }
            
          };
        return(
           <div><div className = "colour_sdg04" >
           <div className = "header">
          Hochwertige Bildung <img className ="sdglogo" alt="logo" src={Logo}/>    
           </div> 
           
       </div>
     
        <div>
        <img className = "board" alt ="spielfeld" src={Spielfeld}/>
          <Modal
            closeModal={this.closeModal}
            customStyle={modalStyle}
            shouldShowModal={this.state.shouldShowModal === modals.modalOne}
            title="Your word is:"
          >
           Test: { randColor }
          </Modal>
          <Modal
            closeModal={this.closeModal}
            customStyle={modalStyleSecond}
            shouldShowModal={this.state.shouldShowModal === modals.modalTwo}
            title="Your word is:"
          >
           Modal Two Test: { randColor }
          </Modal>
          <button data-modal-id={modals.modalOne} type="button" onClick={this.openModal}> <img className = "cards" alt ="test" src={Cards}/></button>
          <button data-modal-id={modals.modalTwo} type="button" onClick={this.openModal}><img className = "question" alt ="test" src={Question}/></button>
        </div>
        </div>
           
           
        );
    }
   
 
}
export default spiel04
