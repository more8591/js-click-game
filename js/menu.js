//##### GLOBAL VAR #####//
var jackHp = 4000;

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
        creditToggle = document.querySelector('.credit-container');
    ovrlyToggle.classList.remove('toggle-off');
    creditToggle.classList.remove('toggle-off');
}

//#######################//
//      GAME MECH        //
//#######################//
function jump() {
    var bro = document.getElementById('lilbro'),
        lp = document.getElementsByClassName('lpnum'),
        e = document.getElementById('lp-container');

    if (bro.classList !== 'jumpAni') {
        bro.classList.add('jumpAni');
        jackHp = jackHp - 1000;
        // var dmg = '<p class="lpnum">' + jackHp.toString() + '</p>';
        // lp.replaceWith(dmg);

    } else {
        bro.classList.add('dbljumpAni');
    }
    setTimeout(function() {
        bro.classList.remove('jumpAni');
    }, 500);
}