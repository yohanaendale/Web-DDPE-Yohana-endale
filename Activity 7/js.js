// function one 
function Register() {
    this.fullName = document.getElementById('fullname').value;   // fullname=   full name input   field   id 
    this.phone = document.getElementById('phone').value;   // phone=  phone   input  field   id 
    this.age = document.getElementById('age').value;  // age=  age  input  field   id 
    this.introduceMySelf = () => {
        parent = document.getElementById('render');  //  render:empty div   id
        const div = document.createElement('div');
        div.classList.add('appended');
        div.innerHTML = `<h1>New Added Form</h1><h1>Full Name: ${this.fullName}</h1><h1>Age: ${this.age}</h1><h1>PhoneNo.: ${this.phone}</h1>`;
        parent.appendChild(div)
        console.log("sxnuhx");
    }

}
const callBack = () => {
    const newObject = new Register();
    newObject.introduceMySelf()

    console.log("sxnuhx");
}
document.getElementById('submitBtn').addEventListener('click', callBack);   // button  to click 

// END
