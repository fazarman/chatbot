const VK = require('vk-io');
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
    if (message.text === 'hello'){
        message.send('hello you');
    }
    else if (message.text === 'barev'){
        message.send('barev');
    }
    else if (message.text === 'privet'){
        message.send('Privetik')
    }
    else if (message.text === 'barlus'){
        message.send('bariluys');
    }
    else if (message.text === 'hi'){
        message.send('hello');
    }
    else if (message.text === 'bonjour'){
        message.send('Bonjour a vous aussi')
    }
    else if (message.text === 'how are you?'){
        message.send('fine, thanks. how are you?');
    }
    else if (message.text === 'how old are you?'){
        message.send('27, and you?');
    }
    else if (message.text === 'I am 32. There you come from?') {
        message.send('From Armenia. And You?');
    }
    else if (message.text === 'Ya,es el em Hayastanic,es ba inchi enq angleren xosum?') {
        message.send('esim chgitem.))) Anunet incha?');
    }
    else {
        message.send('ay qez ban')
    }

});