const chatInput = document.querySelector('._chatInvoker_');
const btnInvoker = document.querySelector('.chat_init');
const chatResponse = document.querySelector('.chat_contents');
let toggleActive = document.querySelector('.searchonline');

    btnInvoker.addEventListener('click', async(event)=>{
        const textresponse = chatInput.value.trim()
        chatResponse.appendChild(userchat()); //returns whatever the user types
        
        chatResponse.appendChild(robotChat());

        // letScroll();
        // alert(EnableWebSearch())
        console.log(textresponse)
      await _bot_('', textresponse);
      chatInput.value = '';

    })

    chatInput.addEventListener('keyup', function(event) {
        if(this.value.trim() !== 0){
            btnInvoker.disabled = false; //enable input
        }else{
            btnInvoker.disabled = true; //disable input
        }

        // console.log(event)
        if(event.key === 'Enter') {
            btnInvoker.click(); //using Javascript to click a button
        }
    })

//function return uer chat
function userchat(){
    let chatWrapper = document.createElement('div');
        chatWrapper.className = 'chats user_chat';
        chatWrapper.innerHTML = `
        <div class="chtTxt">
                    <p>${chatInput.value.trim()}</p>
                    <span class="userIcon">
                        <i class="fas fa-user-alt"></i>
                    </span>
                </div>
        `;
        chatInput.value = '';
    return chatWrapper;
}

function robotChat(){
    let chatWrapper = document.createElement('div');
        chatWrapper.className = 'chats robot_chat';
        chatWrapper.innerHTML = `
        <div class="chtTxt">
                     <span class="userIcon robotIcon">
                        <i class="fas fa-robot"></i>
                        <span class="animateWrap">
                            <span class="animate"></span>
                            <span class="animate"></span>
                            <span class="animate"></span>
                        </span>
                    </span>
                    <p class="thinking"></p>
                </div>
        `;
    return chatWrapper;
}

//toggle between search online and offline state
toggleActive.addEventListener('click', function(){
    this.classList.toggle('active');
})

//check if user enable web search
function EnableWebSearch(){
    if(toggleActive.classList.contains('active')){
        return true;
    }else{
        return false;
    }
}

//scroll chat
function letScroll(){
    // chatResponse.addEventListener('scroll', function(){
        console.log(this.clientHeight)
        chatResponse.scrollTo = chatResponse.scrollHeight - 200;
        // if(this.clientHeight > this.style.height){
        //     chatResponse.scrollTo(130)
        // }
    // })
}

async function UseGemini(txt){
    let apikey = 'AIzaSyBurp866T9fzq144DM8Y77v559_l7gEEGc'; 
    
//Correct payload structure
const payload = {
    contents: [{
        parts: [{
            text: txt  //Proper nested structure
        }]
    }]
};

try{
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apikey}`,{
        method: "post",
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(payload)
    });

    // let result = await respones.json();

    // console.log(result)
    const result = await response.json();

    // let myresponse = result.candidates[0].content.parts[0];

    //     if('text' in myresponse){
    //         return myresponse.text;
    //     }else{
    //         return 
    //     }

    if (result &&
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0 &&
        result.candidates[0].content.parts[0].text
    ) {
        const generatedText = result.candidates[0].content.parts[0].text;
        return generatedText;
    } else {
        return "❤️⚠️Gemini response is empty or not ready.";
    }           



}  catch (error){
    console.error("Error calling Gemini API:", error);
    throw error;
    }
}


// console.log(UseGemini('Who is Tinubu?'));
//local response
function UseLocal(txt){
    // alert(txt)
}

// console.log(navigator)
//Another way to get an api key is GBEN apart from GEMINI
function useLocal(txt){
    let userPrompt = txt;
    let cht;
    let key
    let responses;
    let mychat;

    if(userPrompt.includes('year')){
        cht = response[0];
        key = Object.keys(cht);

        mychat = key[Math.floor(Math.random() * key.length)]; 

        return cht[mychat];
    }

    if(userPrompt.includes('time')){
        cht = response[1];
        key = Object.keys(cht);

        mychat = key[Math.floor(Math.random() * key.length)]; 

        return cht[mychat];
    }
    // return mychat;
}

//return bot response
async function _bot_ (rtn, txt){

    let response = EnableWebSearch() ? await UseGemini(txt) : UseLocal(txt); //data
    let AllResponsePtag = document.querySelectorAll('.thinking');
    let lastP = AllResponsePtag[AllResponsePtag.length - 1];

    console.log(lastP)
    let start = 0;
    let time = setInterval(() => {
        // console.log(response.chatAt(start))
        lastP.innerHTML += response.charAt(start);
        //scrollDown();

        if(start >= response.length){
            clearInterval(time);
            let think = document.querySelectorAll('.animateWrap');
            let lspan = think[think.length - 1];

            lspan.remove();

        }
        start++;
    }, 30);
}

function _checkInternet_() {
   if(navigator.onLine);
}

window.addEventListener('online', function(){
    toggleActive.click();
});
window.addEventListener('offline', function(){
    toggleActive.click();
});

