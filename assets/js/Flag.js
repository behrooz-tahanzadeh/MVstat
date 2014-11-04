function Flag(i,j)
{
	this.i = i;
	this.j = j;
	
	Flag.List.push(this);
}




Flag.List = [];

Flag.DrawAll = function()
{
	for (var i in Flag.List)
		Flag.List[i].draw();
};

Flag.prototype.draw = function()
{
	var ctx = GV.Ctx;
	
	ctx.fillStyle = 'red';
	
	var x = (this.j*GV.Board.width)+GV.Board.width/2;
	var y = (this.i*GV.Board.height)+GV.Board.height/2;
	var r = GV.Board.height/2;
	
	ctx.moveTo(x+r, y);
	ctx.arc(x,y,r,0,2*Math.PI);
	
	ctx.fill();
};