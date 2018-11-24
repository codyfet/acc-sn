// import React from 'react';
// // import {getDayLabel} from './Utils';

// // import ScrollToBottom from 'react-scroll-to-bottom';

// export class MessageList extends React.Component {
//     render() {
//         const {messages, currentUsername} = this.props;
//         let currentDateString;

//         return (
//             <ScrollToBottom mode="bottom" className="message-list scrollable-chat-view">
//                 {messages.map((message, index) => {
//                     const date = new Date(message.createdAt);
//                     const dateString = date.toLocaleDateString();
//                     const timeString = date.toLocaleTimeString();
//                     let updateDate = false;

//                     if (currentDateString !== dateString) {
//                         currentDateString = dateString;
//                         updateDate = true;
//                     }

//                     console.log('message')
//                     console.log(message)

//                     return (
//                         <div key={message.id} className={`message ${(message.senderId === currentUsername) ? 'me' : 'not-me'}`}>
//                             <div className="date-string">{updateDate ? getDayLabel(date) : null}</div>
//                             <div className="author-block">{`${message.senderId}, ${timeString}`}</div>
//                             <div className="message-block"><div className="inner">{message.text}</div></div>
//                             {
//                                 !!message.attachment ?
//                                     <div><img className="image" src={`${message.attachment.link}?dummy=${Math.random()}`}/></div> :
//                                     null
//                             }
//                         </div>
//                     )
//                 })}
//             </ScrollToBottom>
//         );
//     }
// }