const VK = require('vk-io');
const mongo = require('./mongorequest')
const vk = new VK({
    token:'e23bafb0f9a3439db58f9296780fda07ee7a1da6880e6bafbf74bc3477c8dd1c989d8661a17616bad1860'
});

vk.longpoll.start()
    .then(() => {
    console.log('Long Poll запущен');

})
.catch((error) => {
    console.error(error);
});

vk.longpoll.on('message', (message)=>{
    console.log(message);
    if (message.flags.indexOf('outbox')!==-1){
        return;
    }
    let arr = message.text.split(" ");
    console.log(arr);
    if (arr[0] === 'add'){

    }
    else if (arr[0] === 'get'){

    }

});
