let BtnClicked = false;

function handleButtonClick(button) {
  BtnClicked = true;
  
  button.classList.add('clicked');

  setTimeout(() => {
    if (BtnClicked) {
      button.classList.remove('clicked');
    }
  }, 200);
}

function withoutBgBtnAnim(button){
  BtnClicked = true;

  button.classList.add('active')

  setTimeout(() => {
    if(BtnClicked){
      button.classList.remove('active')
    }
  }, 200);
};

// Functions for buttons with background 

document.getElementById('header-btn').addEventListener('click', function() {
  handleButtonClick(this);
});

document.getElementById('btnHero').addEventListener('click', function() {
  handleButtonClick(this);
});

document.getElementById('btnUnseenSect').addEventListener('click', function() {
  handleButtonClick(this);
});

document.getElementById('btn-howToDesignSect').addEventListener('click', function() {
  handleButtonClick(this);
});

document.getElementById('btn-preFooterSect').addEventListener('click', function(){
  handleButtonClick(this);
});

// Functions for buttons without background 

document.getElementById('btn-teslaSect').addEventListener('click', function() {
  withoutBgBtnAnim(this);
});

const inputFooter = document.querySelector('.input-footer');

function sendBtnAnimation() {
  if (inputFooter.value.trim() === "") {
    alert('Please, enter text!');
    return;
  }

  alert(`Sent message: ${inputFooter.value}`);

  inputFooter.value = "";
}

document.getElementById('input-btn-footer').addEventListener('click', sendBtnAnimation);
