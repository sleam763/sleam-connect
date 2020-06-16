import React from 'react'
import facebook from './images/facebook.png'
import github from './images/github.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import {Card} from './Card'
import check from './images/check.svg'
import checkBlue from './images/checkBlue.svg'
import checkPurple from './images/checkPurple.svg'


const Front=()=>{
    return(
        <div id='container'>
            <div id='nav'>
                <h1>Lit.</h1>
                <div id='header-link'>
                    <img alt='facebook' src={facebook} width='20px' height='20px'/>
                    <img alt='github' src={github} width='40px' height='20px'/>
                    <img alt='instagram' src={instagram} width='20px' height='20px'/>
                    <img alt='twitter' src={twitter} width='30px' height='20px'/>
                </div>                
            </div> <br/> <br/>
            <div id='pricing'>
                <h1>Our pricing plan for everyone</h1>
                <p>Packages are for individuals only</p>
            </div>
            <div id='table-container'>
                <Card />
                <table>
                    <tbody>
                        <tr>
                            <td>Loan</td>
                            <td className='green'>50k - 150k Naira</td>
                            <td className='blue'>50k - 2M Naira</td>
                            <td className='purple'>50k - 4M Naira</td>
                        </tr>
                        <tr>
                            <td>Investment</td>
                            <td><img alt='' src={check} width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Smart Travel Savings</td>
                            <td><img alt='' src={check} width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Security</td>
                            <td><img alt='' src={check} width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Bank Statement</td>
                            <td className='green'>200k - 400k Naira</td>
                            <td className='blue'>200k - 1M Naira</td>
                            <td className='purple'>200k - IM Naira</td>
                        </tr>
                        <tr>
                            <td>Visa</td>
                            <td><img alt='' src={check} width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Ticket</td>
                            <td><img alt='' src={check} width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Escort</td>
                            <td><img alt=''  width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Eight Free Country Destination</td>
                            <td className='green'>Just 1</td>
                            <td className='blue'>Just 3</td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Tour package</td>
                            <td><img alt='' src={check} width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Hotel Reservation</td>
                            <td><img alt='' src={check} width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>24/7 Customer Success Expert</td>
                            <td><img alt=''  width='20px'/></td>
                            <td><img alt=''  width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Travel shows</td>
                            <td><img alt='' src={check} width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Event</td>
                            <td><img alt=''  width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Games</td>
                            <td><img alt=''  width='20px'/></td>
                            <td><img alt=''  width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Gold Investor</td>
                            <td><img alt=''  width='20px'/></td>
                            <td className='blue'>Silver Investor</td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Start Up</td>
                            <td><img alt='' width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Give a Meal</td>
                            <td><img alt='' src={check} width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                        <tr>
                            <td>Cargo</td>
                            <td><img alt='' src={check} width='20px'/></td>
                            <td><img alt='' src={checkBlue} width='20px'/></td>
                            <td><img alt='' src={checkPurple} width='20px'/></td>
                        </tr>
                    </tbody>
                </table>
            </div><br/> <br/>
            <footer>
                <h1>lit.</h1>
                <div id='footer-list'>
                    <p>Terms & Condition <span> |</span></p>
                    <p>Career<span> |</span></p>
                    <p>Privacy policy <span>|</span></p>
                    <p>Copyright &copy; Sleam connect 2019</p>
                </div>
                <div id='footer-nav'>
                    <img alt='facebook' src={facebook} width='20px' height='20px'/>
                    <img alt='github' src={github} width='30px' height='20px'/>
                    <img alt='instagram' src={instagram} width='20px' height='20px'/>
                    <img alt='twitter' src={twitter} width='23px' height='20px'/>
                </div>
            </footer>
        </div>
    )
};

export default Front;