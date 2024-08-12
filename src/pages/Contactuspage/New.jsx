import React, { useState } from 'react'
import './New.css'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import image1 from '../../Assets/Image 1.png'
// import Newtwo from './Newtwo';

const New = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [isIssuesOpen, setIsIssuesOpen] = useState(true);
  const [selectedHelpTopic, setSelectedHelpTopic] = useState(null);
  const [isHelpTopicsOpen, setIsHelpTopicsOpen] = useState(true);

  const typesOfIssues = ['Help With Your Issue', 'Help With Your Order', 'Help With Your Other Issue'];
  const helpTopics = ['Delivery related', 'Login and my account', 'Refunds related', 'Payment', 'Returns & Pickup related', 'Cancellation related', 'Abaskeo Coins', 'Others'];

  const toggleIssuesSection = () => {
    setIsIssuesOpen(!isIssuesOpen);
  };

  const toggleHelpTopicsSection = () => {
    setIsHelpTopicsOpen(!isHelpTopicsOpen);
  };
  const sectionStyle = {
    backgroundColor: isHelpTopicsOpen ? '#02A6E2' : 'inherit',
    color: isHelpTopicsOpen ? '#fff' : 'inherit',
    cursor: 'pointer', 
  };
  const document ={
    backgroundColor: isIssuesOpen ? '#02A6E2' : 'inherit',
    color: isIssuesOpen ? 'white' : 'inherit',
    cursor: 'pointer', 
  };
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  return (

    <div className='filter-main'>
      <div className="filter-sidebar">
        <div className="filter-section">
          <div className="section-heading" onClick={toggleIssuesSection} style={document}>
            <h3>
              TYPES OF ISSUES{' '} &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; {isIssuesOpen ? (
                <MdKeyboardArrowUp style={{ MarginRight: '-40rem', alignItems: 'center' }} />

              ) : (
                < MdKeyboardArrowDown />
              )}
            </h3>
          </div>
          {isIssuesOpen && (
            <ul>
              {typesOfIssues.map((issue, index) => (
                <li key={index} onClick={() => setSelectedIssue(issue)}>
                  {issue}
                </li>
              ))}
            </ul>
          )}
         
        </div>

        <div className="filter-section">
          <div className="section-heading" onClick={toggleHelpTopicsSection} style={sectionStyle}>
            <h3>
              HELP TOPICS{' '}
              &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp; {isHelpTopicsOpen ? (
                <MdKeyboardArrowUp />
              ) : (
                < MdKeyboardArrowDown />
              )}
            </h3>
          </div>
          {isHelpTopicsOpen && (
            <ul>
              {helpTopics.map((topic, index) => (
                <li key={index} onClick={() => setSelectedHelpTopic(topic)}>
                  {topic}
                </li>
              ))}
            </ul>
          )}
          {/* <p className="selected-item">Selected Help Topic: {selectedHelpTopic || 'None'}</p>   */}
        </div>
      </div>


      {/* // right section  */}
     {/* <Newtwo/> */}
    </div>
  )
}

export default New