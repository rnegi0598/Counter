const currentEl=document.querySelector('.current');
const nextEl=document.querySelector('.next');
const formEl=document.querySelector('form');

formEl.addEventListener(
    'submit',
    (event)=>{
        let val= document.querySelector('input').value;
        counter(val);
        document.querySelector('input').value="";
        event.preventDefault();
    }
    );

 const counter=(val)=>{
    let count=0;
    let color=false;
    currentEl.innerText=count;
    let id=setInterval(()=>{
        if(count>=val){
            clearInterval(id);
            return;
        }
        if(!color && val-count<5){
            color=true;
            nextEl.classList.add('color-crimson');
            currentEl.classList.add('color-red');
        }
        
        count++;
        if(count%2==1){
            nextEl.innerText=count;
            currentEl.classList.add('hide');
            nextEl.classList.remove('hide');
        }else{
            currentEl.innerText=count;
            nextEl.classList.add('hide');
            currentEl.classList.remove('hide');
        }
        
        
        nextEl.classList.toggle('animate');
   
        
    },1000);

    
 };   