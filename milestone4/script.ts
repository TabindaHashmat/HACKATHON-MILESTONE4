// get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//handle form submission
form.addEventListener('submit', (event: Event)=>{
    event.preventDefault(); //prevent page reload

    //collect input values
    const name = (document.getElementById('name')as HTMLInputElement).value;
    const email= (document.getElementById('email')as HTMLInputElement).value;
    const phone = (document.getElementById('phone')as HTMLInputElement).value;
    const education = (document.getElementById('education')as HTMLInputElement).value;
    const experience = (document.getElementById('experience')as HTMLInputElement).value;
    const skills = (document.getElementById('skills')as HTMLInputElement).value;


//Generate the resume content dynamically
const resumeHtml = `
<h2><b>Editable Resume</b></h2>
<h3>personal information</h3>
<p><b> Nmae: </b><span contenteditable="true">${name}</span></p>
<p><b> email: </b><span contenteditable="true">${email}</span></p>
<p><b> phone: </b><span contenteditable="true">${phone}</span></p>


<h3>Education</h3>
<p>${education}</p>

<h3>skills</h3>
<p contentediatable="true">${skills}</p>`
;

//Genrated resume

if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHtml;
} else{
    console.error('The Resume Display element is Missing');
}
})