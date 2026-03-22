//your JS code here. If required.https://www.svgrepo.com/show/345221/three-dots.svg


document.getElementById("btn").addEventListener('click', (e) => {
	e.preventDefault();
	const age = document.getElementById("age").value;
	const name = document.getElementById("name").value.trim();

	if (age==="" || name === ""){
		alert("Please enter valid details")
		return
	}

	const promise = new Promise((resolve, reject)=>{
		if (age > 18){
			setTimeout(() => {
				resolve(`Welcome, ${name}. You can vote.`)
			}, 4000)
		}else{
			setTimeout(() => {
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}, 4000)
		}
	})

	promise.then(data => {
		alert(data)
	}).catch(err => {
		alert(err)
	})


	
})