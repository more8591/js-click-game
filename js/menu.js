//##### GLOBAL VAR #####//
jackHp = 5;

//##################//
//      MENU        //
//##################//
function startGame() {
    var hideMenu = document.getElementById('menu-body').style.display = 'none',
        showGame = document.getElementById('gameBody').style.display = 'inline-block',
        lostGameImg = document.getElementById('jackLostImg');

    setInterval(function() {
        // CHECKS IF YOU LOST
        if (jackHp < 1) {
            lostGameImg.style.display = 'block';
            jackHp = 5; // reset HP
            clearInterval();
        }
    });

}

function gameSettings() {

}

function gameCredits() {
    var ovrlyToggle = document.querySelector('.overlay'),
        results = ovrlyToggle.classList.remove('toggle-off');
    return results;
}

//#######################//
//      GAME MECH        //
//#######################//
function jump() {
    var bro = document.getElementById('lilbro');

    if (bro.classList !== 'jumpAni') {
        bro.classList.add('jumpAni');
        jackHp = jackHp - 1;
    }
    setTimeout(function() {
        bro.classList.remove('jumpAni');
    }, 300);
}