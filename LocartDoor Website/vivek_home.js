$(document).ready(function(){
  let hamber = document.querySelector('.hamber');
  let close = document.querySelector('.close');
  let Navv = document.querySelector('.Navv');
  hamber.addEventListener('click',function(){
		Navv.classList.add('open');
	});
	close.addEventListener('click',function(){
		Navv.classList.remove('open');
	});
});