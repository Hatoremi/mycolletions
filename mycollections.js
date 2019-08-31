(function(){
    'use strict';
    const collectionInput = document.getElementsByClassName('collection');
    const collectionList = document.getElementsByClassName('collections')
    const deleteAll = document.getElementById('delete-all');
    let i;

    //追加ボタンの処理
    const novelButton = document.getElementById('novel-button');
    const mangaButton = document.getElementById('manga-button');
    const movieButton = document.getElementById('movie-button');
    const animeButton = document.getElementById('anime-button');
    const dramaButton = document.getElementById('drama-button');
    const musicButton = document.getElementById('music-button');
    const gameButton = document.getElementById('game-button');
    const otherButton = document.getElementById('other-button');

    novelButton.onclick = () => {
        i = 0;
        collectionDisplay(i);
    }

    mangaButton.onclick = () => {
        i = 1;
        collectionDisplay(i);
    }

    movieButton.onclick = () => {
        i = 2;
        collectionDisplay(i);
    }

    animeButton.onclick = () => {
        i = 3;
        collectionDisplay(i);
    }

    dramaButton.onclick = () => {
        i = 4;
        collectionDisplay(i);
    }

    musicButton.onclick = () => {
        i = 5;
        collectionDisplay(i);
    }

    gameButton.onclick = () => {
        i = 6;
        collectionDisplay(i);
    }

    otherButton.onclick = () => {
        i = 7;
        collectionDisplay(i);
    }

    function collectionDisplay(num){
        const collectionName = collectionInput[num].value;
        if (collectionName.length === 0){
            return;
        }

        const collectionAdd = document.createElement('li');
        collectionAdd.innerText = collectionName;
        collectionList[num].appendChild(collectionAdd);
    }

    //削除ボタンの処理
    const novelDButton = document.getElementById('novel-Dbutton');
    const mangaDButton = document.getElementById('manga-Dbutton');
    const movieDButton = document.getElementById('movie-Dbutton');
    const animeDButton = document.getElementById('anime-Dbutton');
    const dramaDButton = document.getElementById('drama-Dbutton');
    const musicDButton = document.getElementById('music-Dbutton');
    const gameDButton = document.getElementById('game-Dbutton');
    const otherDButton = document.getElementById('other-Dbutton');

    novelDButton.onclick = () => {
        i = 0;
        removeChild(i);
    }

    mangaDButton.onclick = () => {
        i = 1;
        removeChild(i);
    }

    movieDButton.onclick = () => {
        i = 2;
        removeChild(i);
    }

    animeDButton.onclick = () => {
        i = 3;
        removeChild(i);
    }

    dramaDButton.onclick = () => {
        i = 4;
        removeChild(i);
    }

    musicDButton.onclick = () => {
        i = 5;
        removeChild(i);
    }

    gameDButton.onclick = () => {
        i = 6;
        removeChild(i);
    }

    otherDButton.onclick = () => {
        i = 7;
        removeChild(i);
    }

    function removeChild (num){
        if (collectionList[num].childElementCount === 0){
            return;
        }
        collectionList[num].removeChild(collectionList[num].lastChild);
    }

    //全削除ボタンの処理
    deleteAll.onclick = () => {
        let res = confirm("※このサイトに記入された全てのデータを削除します。");
        if (res == true){
            for(let k = 0; k <= 7; k++){
                removeAllChild(collectionList[k]);
            }
        }
    }

    function removeAllChild(element){
        while (element.firstChild){
            element.removeChild(element.firstChild);
        }
    }

})();