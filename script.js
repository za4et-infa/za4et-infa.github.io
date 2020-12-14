let coll = document.getElementsByClassName('collapsible');
for(let i = 0; i < coll.length;  i++) {
    coll[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
}

function preloader() {
    $(() => {
    
        setInterval(() => {
 
            let p = $('.preloader');

            p.css('opacity', 0);

            setInterval(
                () => p.remove(),
                parseInt(p.css('--duraction')) * 1000
            );

        }, 1000);
     
    });
}

setInterval(() => preloader(), 5000);