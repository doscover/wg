		function generate() {
			var txtValue = document.getElementById("txtWords").value; 
			var generatedCode = "";
      
			var arrayWords = txtValue.split(" ");
			if(arrayWords.length == 1) {
				alert("Insereaza minim 2 cuvinte"); 
			}
			else {
				for (var i = 0; i < arrayWords.length; i++ ) {
					generatedCode += arrayWords[i] + ",";
				}
                  for (var i = 0; i < arrayWords.length - 1; i++ ) {
					generatedCode += arrayWords[i] + " " + arrayWords[i + 1] + ",";
				}
				 for (var i = 0; i < arrayWords.length - 1; i++ ) {
					generatedCode += arrayWords[i + 1] + " " + arrayWords[i] + ",";
				}
       
				document.getElementById("generateResult").innerHTML = generatedCode;
			}
			
		}
	