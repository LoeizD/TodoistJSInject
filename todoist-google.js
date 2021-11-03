setTimeout(function(){
    document.querySelectorAll(".task_content").forEach((e, i)  => {
        var button = document.createElement("BUTTON");
        button.innerHTML = "Google";
        button.style = "background-color: black; margin-right: 200px;"
        var URL = String(`https://google.com/search?q=${e.innerHTML}`)
        // console.log(URL);
    
        button.addEventListener("click", function() {
            window.open(URL, '_blank');
        })
        
        e.parentElement.appendChild(button);

        // Hide if not first task on Just Today https://todoist.com/app/filter/2186297623
        if (window.location.href.indexOf("2186297623") != -1 || window.location.href.indexOf("2305404609") != -1 ) {
            if (i != 0) {
                e.parentElement.parentElement.parentElement.style.display = 'none'
            }
        }
    })
    console.log("added google!")


}, 3000); 