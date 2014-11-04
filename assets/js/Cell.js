function Cell(i,j)
{
	this.i = i;
	this.j = j;
}

Cell.prototype.set = function(i,j)
{
	this.i = i;
	this.j = j;
	
	return this;
};

Cell.prototype.offset = function(c)
{
	this.i += c.i;
	this.j += c.j;
	
	return this;
};




Cell.prototype.add = function(c)
{	
	var o = this.clone();
	
	o.i += c.i;
	o.j += c.j;
	
	return o;
};



Cell.prototype.equal = function(c)
{
	return (this.i == c.i) && (this.j == c.j);
};



Cell.prototype.clone = function()
{
	return new Cell(this.i, this.j);
};

Cell.prototype.bottom = function()
{
	return this.add(new Cell(1,0));
};



Cell.prototype.right = function()
{
	return this.add(new Cell(0,1));
};


Cell.prototype.top = function()
{
	return this.add(new Cell(-1,0));
};

Cell.prototype.left = function()
{
	return this.add(new Cell(0,-1));
};

Cell.Right = new Cell(0,1);
Cell.Top = new Cell(-1,0);
Cell.Left = new Cell(0,-1);
Cell.Bottom = new Cell(1,0);

Cell.prototype.stepTo = function(d, ortho)
{	
	if(!ortho)
	{
		var i = 0;
		var j = 0;
		
		if(this.i<d.i)		i = 1 ;
		else if(this.i>d.i)	i = -1;
		
		if(this.j<d.j)		j = 1 ;
		else if(this.j>d.j)	j = -1;
		
		return new Cell(i,j);
	}
	else
	{
		var di = d.i - this.i;
		var dj = d.j - this.j;
		
		var result = [];
		
		if(Math.abs(di)>=Math.abs(dj))
		{
			result[0] =  di>=0 ? Cell.Bottom : Cell.Top;
			result[1] =  dj>=0 ? Cell.Right : Cell.Left;
		}
		else
		{
			result[1] =  di>=0 ? Cell.Bottom : Cell.Top;
			result[0] =  dj>=0 ? Cell.Right : Cell.Left;
		}
		
		return result;
	}
};


Cell.prototype.setBy = function(c)
{
	this.set(c.i, c.j);
};


Cell.directionLoop = function(start)
{
	var d = [Cell.Bottom, Cell.Right, Cell.Top, Cell.Left];
	
	var o = [];
	
	for(var i=start; i<4; ++i)
	{
		o.push(d[i]);
	}
	for(var i=0; i<start; ++i)
	{
		o.push(d[i]);
	}
	
	return o;
};