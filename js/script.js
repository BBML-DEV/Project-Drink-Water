class Water{
    constructor(){
        this.percentage = document.getElementById("percentage");
        this.liters = document.getElementById("liters");
        this.cups = document.querySelectorAll(".cup-small");
        this.remained = document.getElementById("remained");
        this.appInit();
    }

    appInit(){
        this.cups.forEach((cup, idx) =>{
            cup.addEventListener("click", () => this.fillCup(idx));
        });
    }

    fillCup(idx){
        if (idx===7 && this.cups[idx].classList.contains("full")) idx--;
        else if(this.cups[idx].classList.contains('full') && !this.cups[idx].nextElementSibling.classList.contains('full')) {
            idx--
        }


        this.cups.forEach((cup, idx2) => {
            if(idx2 <= idx) {
                cup.classList.add('full')
            } else {
                cup.classList.remove('full')
            }
        });

        this.updateBigCup();
    }

    updateBigCup(){
        const fullCups = document.querySelectorAll('.cup-small.full').length;
        const totalCups = this.cups.length;

        if(fullCups === 0){
            this.percentage.style.visibility = 'hidden';
            this.percentage.style.height = 0;
        } else {
            this.percentage.style.visibility = 'visible';
            this.percentage.style.height = `${fullCups / totalCups  * 360}px`;
            this.percentage.innerHTML = `${fullCups / totalCups * 100}%`;
        }


        if(fullCups === totalCups){
            this.remained.style.visibility = 'hidden';
            this.remained.style.height = 0;
        } else {
            this.remained.style.visibility = 'visible';
            this.liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
        }

    }

 

}


const w = new Water();