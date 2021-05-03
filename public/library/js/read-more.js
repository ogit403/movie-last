//showMore('btn-read-more', 'read-more');
// showMore('btn-read-more-2', 'read-more-2');

showMore2('btn-show', 'text');

function showMore(idButton, classShowMore) {
    document.getElementById(idButton).addEventListener('click', function() {
        var list = document.getElementsByClassName(classShowMore);
        for (var i = 0; i < list.length; i++) {
            list[i].style.display = 'block';
        }
        document.getElementById(idButton).style.display = 'none';
    })
}

function showMore2(idButton, classShowMore) {
    document.getElementsByClassName(idButton)[0].addEventListener('click', () => {
        var temp = document.getElementsByClassName(classShowMore)[0];
        var item = document.getElementsByClassName(idButton)[0];
        if(temp.style.height === '170px'){
            temp.style.height = '130px';
            item.style.backgroundImage = 'url(../../../img/detail/arrow-down.png)';
        } 
        else{
            item.style.backgroundImage = 'url(../../../img/detail/arrow-up.png)';
            temp.style.height = '170px';
        }         
    })
}






