function Walker(i,j)
{
	this.i = i;
	this.j = j;
	
	Walker.List.push(this);
}




Walker.List = [];

Walker.DrawAll = function()
{
	for (var i in Walker.List)
		Walker.List[i].draw();
};




Walker.prototype.draw = function()
{
	var ctx = GV.Ctx;
	
	ctx.beginPath();
	
	ctx.strokeStyle = 'orange';
	ctx.lineWidth = 5;
	
	var w = GV.Board.width;
	var h = GV.Board.height;
	var x = this.j*w;
	var y = this.i*h;
	
	ctx.moveTo(x,y);
	ctx.lineTo(x+w,y+h);
	
	ctx.moveTo(x,y+h);
	ctx.lineTo(x+w,y);
	
	ctx.stroke();
};