function PathFinder(w,f)
{
	this.walker = new Cell(w.i,w.j);
	this.flag = new Cell(f.i,f.j);
	
	this.path = [this.walker.clone()];
	this.step = new Cell(0,0);
	this.preStep = new Cell(0,0);
	this.frontIndex = 0;
}




PathFinder.prototype.run = function()
{
	while(this.setStep())	
	{
		this.takeStep();
		this.draw();
	}
};



PathFinder.prototype.canTakeStep = function(step)
{
	var s = this.pointer().add(step);
	return GV.Board.isVoid(s.i,s.j);
};


PathFinder.prototype.indexInPath = function(c)
{
	for(var i=0; i<this.path.length; ++i)
		if(c.equal(this.path[i]))
			return i;
	
	return -1;
};



PathFinder.prototype.isStepTakenBefore = function(step)
{
	var c = this.pointer().add(step);
	var i = this.indexInPath(c);
	
	return i != -1;
};


PathFinder.prototype.setStep = function()
{	
	if(this.pointer().equal(this.flag))
	{
		return false;
	}
	
	var s = this.pointer().stepTo(this.flag, true);
	
	var d = Cell.directionLoop(this.frontIndex);
	
	var steps = [s[0], s[1], d[0], d[1], d[2], d[3]];
	
	for(var i in steps)
		if(this.canTakeStep(steps[i]) && !this.isStepTakenBefore(steps[i]))
		{
			if(i<2)
				this.frontIndex = 0;
			else
				this.frontIndex = i-2;
			
			this.preStep.setBy(this.step);
			this.step.setBy(steps[i]);
			break;
		}
	
	return true;
};




PathFinder.prototype.takeStep = function()
{	
	var s = this.pointer().add(this.step);	
	this.path.push(s);
};




PathFinder.prototype.pointer = function()
{
	if(this.path.length>0)
		return this.path[this.path.length-1];
	else
		return null;
};




PathFinder.prototype.draw = function()
{
	var ctx = GV.Ctx;
	
	var w = GV.Board.width;
	var h = GV.Board.height;
	
	for(var i in this.path)
	{
		var c = this.path[i];
		
		var x = c.j*w;
		var y = c.i*h;
		
		//ctx.fillStyle = 'white';
		//ctx.fillRect(x, y, w, h);
		ctx.fillStyle = 'blue';
		ctx.fillRect(x+2, y+2, w-4, h-4);
	}
};