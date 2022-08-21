
function passedFunc() {   
  console.log('Hi');
} 
function originalFunc(func) { 
  func();  
}
originalFunc(passedFunc);
