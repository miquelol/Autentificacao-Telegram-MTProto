// UPDATES.js
/* eslint-disable no-undef */

const api = require("./api-origin");

  

api.mtproto.updates.on('updates', (updateInfo) => {

 console.log('updates:', updateInfo);})

  


function sendMessage() {
    api.call("messages.sendMessage", {
      clear_draft: true,
  
      peer: {
        _: "inputPeerSelf",
      },
      message: "Hello @mtproto_core",
      entities: [
        {
          _: "messageEntityBold",
          offset: 6,
          length: 13,
        },
      ],
  
      random_id:
        Math.ceil(Math.random() * 0xffffff) + Math.ceil(Math.random() * 0xffffff),
    });
  }
  
  
  
  module.exports = { sendMessage};