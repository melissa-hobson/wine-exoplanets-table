fetch("https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+ps+where+default_flag=1+and+(hostname=%27TOI-201%27+or+hostname=%2714+Her%27)&format=json")
	.then(function(response){
	   return response.json();
	})
	.then(function(planets){
	   let placeholder = document.querySelector("#data-output");
	   let out = "";
	   for(let planet of planets){
	      out += `
	         <tr>
	            <td>${planet.pl_name}</td>
	            <td>${planet.pl_orbper}</td>
	            <td>${planet.pl_radj}</td>
	            <td>${planet.pl_massj}</td>
	         </tr>
	      `;
	   }
	 
	   placeholder.innerHTML = out;
	});
