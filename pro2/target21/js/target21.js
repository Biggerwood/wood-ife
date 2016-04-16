function $(id){
	return document.getElementById(id);
}
function CreateBox(inputTag, renderTag, renderButton){
	this.queArray = [];

	this.insert = function(){
		var val = this.trim($(inputTag).value).split(" ");
		for(var i = 0; i < val.length; i++ ){
			if (val[i] && !(this.isUnique(val[i]))){
				this.queArray.push(val[i]);
			}		
		}
	}

    //trim去除两侧空格
	this.trim = function(str){
　　     return str.replace(/(^\s*)|(\s*$)/g, "");
	}

	//渲染box
	this.render = function(){		
		var showHTML = "";

		for(var i = 0; i < this.queArray.length; i++){
			showHTML += "<div>"+this.queArray[i]+"</div>"
		}
		$(renderTag).innerHTML = showHTML;
	}

	//去重处理
	this.isUnique = function(temp){
		var flag = false;
		for(var i in this.queArray){  
			if(this.queArray[i] == temp){
				flag = true;
				break;
			}
		}
		return flag;
	}

	this.bind = function(){
		var that = this;
		$(renderButton).addEventListener('click',function(){
			that.insert();
			that.render();
		});
	}

	this.init = function(){
		this.bind();
	}
}

window.onload = function(){
	var test = new CreateBox("input_number", "hobbyBox", "confirm");
	test.init();	
}
