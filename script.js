const slideNavMenu=()=>{
	
	
	const icon=document.querySelector('.iconSelect');
	const navLinksUl=document.querySelector(".navLinks ul")

	icon.addEventListener('click',()=>{
		icon.classList.toggle("closeOnly");
		navLinksUl.classList.toggle("navLinks-onScreen");
		
	})

}

slideNavMenu();