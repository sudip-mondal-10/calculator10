let Result=document.querySelector('.Result');
function appendToResult(value){
	result.value+=value;
	}
function clearResult(){
	result.value='';
}
function calculateResult(){
	result.value=eval(result.value);
}