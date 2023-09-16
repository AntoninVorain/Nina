// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = [
  './assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.webp',
  './assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.webp',
  './assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.webp',
  './assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.webp',
  './assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.webp',
  './assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.webp',
  './assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.webp',
  './assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.webp',
  './assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.webp'];

var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}