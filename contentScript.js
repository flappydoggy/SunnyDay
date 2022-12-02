document.addEventListener('DOMContentLoaded', ContentLoadedEvent, false);

function ContentLoadedEvent () {

	if (document.documentURI.search("weibo") != -1){
			var styles = document.head.getElementsByTagName("style");
			for(value of styles)
			{
				  if(value.innerHTML.search("grayscale") != -1)
					value.innerHTML = "";
			}

	}
	
	if (document.documentURI.search("bilibili") != -1){
			document.documentElement.classList.remove("gray");
	}
}


