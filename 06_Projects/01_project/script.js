const btn=document.querySelectorAll('.btn');
btn.forEach(function(button){
    button.addEventListener('click',function(){
      if(button.id==='red'){
        document.body.style.backgroundColor='red';
      }
      else if(button.id==='blue'){
        document.body.style.backgroundColor='blue';
      }
      else if(button.id==='green'){
        document.body.style.backgroundColor='green';
      }
      else if(button.id==='yellow'){
        document.body.style.backgroundColor='yellow';
      }
    })
})