import React from "react";
import "../Wallet page/Walletpage.css";
import coin from '../../Assets/Coins (1).png'
import { IoIosArrowForward } from "react-icons/io";
import WALLETLOGO1 from "../../Assets/wallet image1.png";
export const WalletPage = () => {
  return (
    <>
      <div id="WALLETPAGE_MAIN_BODY">
        <div id="WALLETPAGE_CARD_BODY">
          <div id="WALLETPAGE_CARD_ALL">
            <div id="WALLETPAGE_CARD_TOP_BODY">
              <p className="wallet-para">Wallet</p>
              <div id="WALLETPAGE_CARD_CHECK_COIN">
                <div className="wallet">
                <p id="WALLETPAGE_CARD_CHECK_PARAGRAPH">  KidzTryz Coin Balance: </p>
                <img src={coin} style={{alignItems:'center',marginTop:'-10px'}}/>
                <p id="WALLETPAGE_CARD_CHECK_PARAGRAPH" style={{color:'#FF70A6'}}>90</p>
                </div>
                
                <div id="WALLETPAGE_CARD_SELECT_CONTAINER">
                  <button className="ton">
                  Check Coin Activity
                    <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                      <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                    </svg>
                  </button>
                 
                </div>
              </div>
            </div>
            {/*  */}
            <div id="WALLETPAGE_IMAGE_SECTION">
              <img src={WALLETLOGO1} alt="" id="WALLETPAGE_IMAGE_ONE" />
            </div>
            {/* 3rd section */}
            <div id="WALLETPAGE_THIRD_SECTION">
              <h2 id="WALLETPAGE_WHIRD_CARD_HEADING_ONE">
                Exciting Rewards for You
              </h2>
              <div id="WALLETPAGE_THIRD_CARD_SELECT_CONTAINER">
              <button className="ton" style={{fontSize:'29px'}}>
              View Claimed Rewards
                    <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                      <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                    </svg>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
